import { PrismaClient } from '@/generated/prisma'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

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

    return Response.json({ success: true, data: { balance: user.balance } })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
