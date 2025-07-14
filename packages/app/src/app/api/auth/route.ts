import { PrismaClient } from '@/generated/prisma'
import { setUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { id: _id, email, password } = await req.json()

  let id = _id

  try {
    if (email && password) {
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
          password,
        },
      })

      id = user.id
    } else {
      await prisma.user.findUniqueOrThrow({
        where: {
          id,
          isAdmin: true,
        },
      })
    }

    const userId = await setUserCookie(id)

    try {
      await prisma.passkey.delete({
        where: {
          userId,
        },
      })
    } catch {}
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true })
}

export async function DELETE() {
  await setUserCookie()

  return Response.json({ success: true })
}
