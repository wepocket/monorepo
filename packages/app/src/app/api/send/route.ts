import { PrismaClient } from '@/generated/prisma/client'
// import { sendFunds } from '@/utils/alchemyWallet'
import { getUserCookie } from '@/utils/helpers/server'

// import { viemSendMXNB } from '@/utils/wepocket'

const prisma = new PrismaClient()

const getUserId = async ({ toId, toUsername }: { toId: string; toUsername: string }) => {
  const where = {
    username: undefined,
    id: undefined,
  } as {
    username: string | undefined
    id: string | undefined
  }

  if (toUsername) {
    where.username = toUsername
  }

  if (toId) {
    where.id = toId
  }

  const user = await prisma.user.findFirstOrThrow({
    where,
  })

  // if (!user.defaultWallet) {
  //   throw new Error('User has no default wallet.')
  // }

  return user
}

export async function POST(req: Request) {
  const { toId, toUsername, amount /* , mockWallet: _mockWallet */ } = await req.json()
  // const mockWallet = _mockWallet === true

  try {
    const userId = await getUserCookie()
    const to = await getUserId({ toUsername, toId })

    // if (mockWallet) {
    //   const transactionHash = await viemSendMXNB({
    //     to: to.defaultWallet as `0x${string}`,
    //     amount,
    //   })

    //   await prisma.transaction.create({
    //     data: {
    //       transactionHash,
    //       amount,
    //       senderId: userId,
    //       recipientId: to.id,
    //     },
    //   })

    //   return Response.json({ success: true, data: { transactionHash } })
    // } else {
    // const { transactionHash } = await sendFunds({ to: to.defaultWallet as `0x${string}`, amount })

    const sender = await prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
    })
    const recipient = await prisma.user.findFirstOrThrow({
      where: {
        id: to.id,
      },
    })

    if (sender.balance < amount) {
      throw new Error('Insufficient funds.')
    }

    const transaction = await prisma.balanceTransaction.create({
      data: {
        amount,
        type: 'PAYMENT',
        senderPostBalance: sender.balance.toNumber() - amount,
        recipientPostBalance: recipient.balance.toNumber() + amount,
        senderId: userId,
        recipientId: to.id,
      },
    })

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        balance: sender.balance.toNumber() - amount,
      },
    })

    await prisma.user.update({
      where: {
        id: to.id,
      },
      data: {
        balance: recipient.balance.toNumber() + amount,
      },
    })

    return Response.json({ success: true, data: { transactionId: transaction.id } })
    // }
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}

export async function GET() {
  return Response.json({ success: true })
}
