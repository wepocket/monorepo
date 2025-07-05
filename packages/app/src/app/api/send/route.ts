import { PrismaClient } from '@/generated/prisma/client'
import { getUserCookie } from '@/utils/helpers/server'
import { sendFunds } from '@/utils/portalhq'
import { MXNB_TOKEN_ARB } from '@/utils/uniswap/constants'
import { viemSendMXNB } from '@/utils/wepocket'
import { arbitrum } from 'viem/chains'

const prisma = new PrismaClient()

const getUserWallet = async (toUsername: string) => {
  const user = await prisma.user.findFirstOrThrow({
    where: {
      username: toUsername,
    },
  })

  return user.defaultWallet
}

export async function POST(req: Request) {
  const { to: _to, toUser, amount, mockWallet: _mockWallet } = await req.json()
  const mockWallet = _mockWallet === 'true'

  try {
    const userId = await getUserCookie()
    const to = _to || (await getUserWallet(toUser))

    if (mockWallet) {
      const transactionHash = await viemSendMXNB({
        to: to as `0x${string}`,
        amount,
      })

      await prisma.transaction.create({
        data: {
          transactionHash,
          amount,
          userId,
        },
      })

      return Response.json({ success: true, data: { transactionHash } })
    } else {
      const { secp256k1Share } = await prisma.wallet.findFirstOrThrow({
        where: {
          userId,
        },
      })

      const { transactionHash } = await sendFunds({
        share: secp256k1Share,
        chain: arbitrum.id.toString(),
        token: MXNB_TOKEN_ARB.address as `0x${string}`,
        to: to as `0x${string}`,
        amount,
      })

      await prisma.transaction.create({
        data: {
          transactionHash,
          amount,
          userId,
        },
      })

      return Response.json({ success: true, data: { transactionHash } })
    }
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}

export async function GET() {
  return Response.json({ success: true })
}
