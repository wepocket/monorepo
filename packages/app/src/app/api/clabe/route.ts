import { PrismaClient } from '@/generated/prisma/client'
import { createCLABE } from '@/utils/bitso'

const prisma = new PrismaClient()

const userId = 'ebc8c7c2-5ee0-462b-9f2a-92300912294b'

export async function POST() {
  try {
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
