import { PrismaClient } from '@/generated/prisma/client'
import { confirmShares, createClient, createWallet, getWalletAddress } from '@/utils/portalhq'

const prisma = new PrismaClient()

const userId = 'ebc8c7c2-5ee0-462b-9f2a-92300912294b'

export async function POST() {
  try {
    const client = await createClient()
    // return
    // {
    //   id: 'cmcnv3bfv0bparw84j4h9i42w',
    //   clientApiKey: '2ea41fa0-9c56-43fa-93d6-8897523ea25f',
    //   clientSessionToken: '2a5b2e4a-3a21-46a2-851d-0730e4757486',
    //   isAccountAbstracted: false
    // }

    const { SECP256K1, ED25519 } = await createWallet()

    await prisma.wallet.create({
      data: {
        secp256k1Id: SECP256K1.id,
        secp256k1Share: SECP256K1.share,
        ed25519Id: ED25519.id,
        ed25519Share: ED25519.share,
        clientId: client.id,
        clientApiKey: client.clientApiKey,
        clientSessionToken: client.clientSessionToken,
        clientIsAccountAbstracted: client.isAccountAbstracted,
        userId,
      },
    })

    await confirmShares(SECP256K1.id, ED25519.id)

    const wallet = await getWalletAddress()

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        defaultWallet: wallet.metadata.namespaces.eip155.address,
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
  return Response.json({ success: true })
}
