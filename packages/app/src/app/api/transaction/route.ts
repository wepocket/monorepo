import { PrismaClient } from '@/generated/prisma'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function GET() {
  const senderId = await getUserCookie()
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        senderId,
      },
      include: {
        sender: {
          select: {
            username: true,
            defaultWallet: true,
          },
        },
        recipient: {
          select: {
            username: true,
            defaultWallet: true,
          },
        },
      },
    })

    return Response.json({ success: true, data: transactions })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
