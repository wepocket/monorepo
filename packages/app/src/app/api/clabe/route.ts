import { PrismaClient } from '@/generated/prisma/client'
import { createCLABE } from '@/utils/bitso'
import { getUserCookie } from '@/utils/helpers/server'

const prisma = new PrismaClient()

export async function POST() {
  try {
    const userId = await getUserCookie()
    const { clabe, type } = await createCLABE()

    await prisma.clabe.create({
      data: {
        clabe,
        type,
        userId,
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
    data = await prisma.clabe.findMany()
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true, data })
}
