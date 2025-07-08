import { PrismaClient } from '@/generated/prisma/client'
import { getUserCookie } from '@/utils/helpers/server'
import { confirmShares, createWallet, getWalletAddress } from '@/utils/portalhq'

const prisma = new PrismaClient()

export async function POST() {
  try {
    const userId = await getUserCookie()

    const { SECP256K1, ED25519 } = await createWallet()
    const wallet = await getWalletAddress()
    const defaultWallet = wallet.metadata.namespaces.eip155.address

    await prisma.wallet.create({
      data: {
        address: defaultWallet,
        secp256k1Id: SECP256K1.id,
        secp256k1Share: SECP256K1.share,
        ed25519Id: ED25519.id,
        ed25519Share: ED25519.share,
        userId,
      },
    })

    await confirmShares(SECP256K1.id, ED25519.id)

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        defaultWallet,
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
