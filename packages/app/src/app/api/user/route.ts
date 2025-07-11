import { PrismaClient } from '@/generated/prisma/client'
import { getUserCookie, isUserAdmin } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, username, password } = await req.json()

  try {
    await prisma.user.create({
      data: {
        email,
        username,
        password, // TODO: encrypt pwd
        isAdmin: email.includes('axnotliztac'),
      },
    })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true })
}

export async function GET() {
  try {
    const isAdmin = await isUserAdmin()
    const userId = await getUserCookie()

    const user = await prisma.user.findUniqueOrThrow({
      select: {
        email: true,
        username: true,
        defaultWallet: true,
        id: false,
        password: false,
        isAdmin: false,
      },
      where: {
        id: userId,
      },
    })

    if (isAdmin) {
      return Response.json({
        success: true,
        users: await prisma.user.findMany({ include: { wallet: true, clabe: true } }),
        user,
      })
    }

    return Response.json({ success: true, user })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
