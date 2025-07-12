import { TransactionType } from '@/generated/prisma'
import { PrismaClient } from '@/generated/prisma'
import { Decimal } from '@/generated/prisma/runtime/library'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

const calculateStakingBalance = async (user: { balance: Decimal; id: string }) => {
  const APR = 0.13

  const latestTx = await prisma.balanceTransaction.findFirst({
    where: {
      recipientId: user.id,
      type: TransactionType.DEPOSIT,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  if (!latestTx?.createdAt) return 0

  const delta = Math.abs(new Date().getTime() - latestTx?.createdAt.getTime())
  const days = delta / (24 * 60 * 60 * 1000)
  const dailyAPR = user.balance.toNumber() * (APR / 365)

  return dailyAPR * days
}

export async function GET() {
  try {
    const userId = await getUserCookie()

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      select: {
        balance: true,
      },
    })

    const stakingBalance = await calculateStakingBalance({ ...user, id: userId })

    return Response.json({ success: true, data: { balance: user.balance, stakingBalance } })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
