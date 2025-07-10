import { PrismaClient } from '@/generated/prisma/client'
import { createWallet } from '@/utils/alchemyWallet'
import { getUserCookie } from '@/utils/helpers/server'
// import { confirmShares, createWallet, getWalletAddress } from '@/utils/portalhq'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { email } = await req.json()

  try {
    const userId = await getUserCookie()
    const user = await prisma.user.findUnique({ where: { email } })

    if (user?.defaultWallet) throw new Error('Wallet already registerded for current user.')

    const { address } = await createWallet({ email })

    await prisma.wallet.create({
      data: {
        address,
        userId,
      },
    })

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        defaultWallet: address,
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
    const userId = await getUserCookie()
    const { defaultWallet, wallet } = await prisma.user.findUniqueOrThrow({
      where: {
        id: userId,
      },
      include: {
        wallet: true,
      },
    })

    return Response.json({ success: true, data: { defaultWallet, wallet: wallet.filter((w) => !!w.address) } })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
