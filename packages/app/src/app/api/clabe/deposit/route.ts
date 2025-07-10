import { PrismaClient } from '@/generated/prisma'
import { getDeposits, GetDepositsResponse, testDeposit } from '@/utils/bitso'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { receiverClabe, receiverName, senderName, amount } = await req.json()

  let data

  try {
    data = await testDeposit({
      receiverName,
      receiverClabe,
      senderName,
      amount,
    })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true, data })
}

export async function GET() {
  try {
    const userId = await getUserCookie()

    const clabes = await prisma.clabe.findMany({
      where: {
        userId,
      },
    })

    const deposits: GetDepositsResponse['response'] = []

    for (const clabe of clabes) {
      const r = await getDeposits({ clabe: clabe.clabe })

      const _deposits = r.response || []

      for (const deposit of _deposits) {
        deposits.push(deposit)
      }
    }

    // TODO: prov implementation, implement JUNO webhook if supported
    for (const deposit of deposits) {
      const exists = await prisma.balanceTransaction.findFirst({ where: { depositId: deposit.depositId } })

      if (exists) continue

      const recipient = await prisma.user.findUniqueOrThrow({
        where: {
          id: userId,
        },
      })

      const amount = parseFloat(deposit.amount)

      await prisma.balanceTransaction.create({
        data: {
          amount,
          type: 'DEPOSIT',
          senderPostBalance: amount,
          recipientPostBalance: recipient.balance.toNumber() + amount,
          depositId: deposit.depositId,
          senderId: userId,
          recipientId: userId,
        },
      })

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          balance: recipient.balance.toNumber() + amount,
        },
      })
    }

    return Response.json({ success: true, data: deposits })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
