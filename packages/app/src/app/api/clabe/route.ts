import { PrismaClient } from '@/generated/prisma/client'
import { createCLABE } from '@/utils/bitso'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST() {
  try {
    const userId = await getUserCookie()
    const userHasCLABE = await prisma.clabe.findFirst({ where: { userId } })

    if (userHasCLABE?.id) return Response.json({ success: false }, { status: 400 })

    const { clabe, type } = await createCLABE()

    await prisma.clabe.create({
      data: {
        clabe,
        type,
        userId,
      },
    })

    return Response.json({ success: true, data: { clabe, type } })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}

export async function GET() {
  try {
    const userId = await getUserCookie()
    const data = await prisma.clabe.findMany({
      where: {
        userId,
      },
    })

    return Response.json({ success: true, data })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
