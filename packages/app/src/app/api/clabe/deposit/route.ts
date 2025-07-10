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

  return Response.json({ success: true, data: deposits })
}
