import { PrismaClient } from '@/generated/prisma'
import { setUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { id } = await req.json()

  try {
    await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    })

    await setUserCookie(id)
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true })
}
