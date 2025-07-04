import { PrismaClient } from '@/generated/prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email, username, password } = await req.json()

  try {
    await prisma.user.create({
      data: {
        email,
        username,
        password, // TODO: encrypt pwd
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
  let data

  try {
    data = await prisma.user.findMany({
      include: {
        clabe: true,
        wallet: true,
      },
    })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true, data })
}
