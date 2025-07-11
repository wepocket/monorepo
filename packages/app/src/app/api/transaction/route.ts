import { BalanceTransaction, PrismaClient } from '@/generated/prisma'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function GET() {
  const userId = await getUserCookie()

  try {
    const transactions = await prisma.balanceTransaction.findMany({
      where: {
        OR: [
          {
            senderId: userId,
          },
          {
            recipientId: userId,
          },
        ],
      },
      include: {
        sender: {
          select: {
            username: true,
          },
        },
        recipient: {
          select: {
            username: true,
          },
        },
      },
    })

    for (const transaction of transactions) {
      ;(transaction as unknown as BalanceTransaction & { isIncome: boolean }).isIncome =
        transaction.recipientId === userId
    }

    return Response.json({ success: true, data: transactions })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
