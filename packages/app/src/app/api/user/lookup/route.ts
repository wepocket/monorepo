import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function GET(req: Request) {
  const url = new URL(req.url)
  const query = url.searchParams.get('q') || ''

  try {
    const where = query
      ? {
          OR: [{ email: { contains: query } }, { username: { contains: query } }],
        }
      : undefined

    const users = await prisma.user.findMany({
      select: {
        email: true,
        username: true,
        defaultWallet: true,
        id: false,
        password: false,
        isAdmin: false,
      },
      where,
    })

    return Response.json({ success: true, users })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
