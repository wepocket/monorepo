import { withdrawFundsMXNMXNB } from '@/utils/bitso'
import { isUserAdmin } from '@/utils/helpers/server'
import { getQuote } from '@/utils/uniswap/quote'
import { createTrade, executeTrade } from '@/utils/uniswap/trading'
import { depositToVault, stakeFunds } from '@/utils/wepocket'

export async function POST(req: Request) {
  const { type, address, amount } = await req.json()

  try {
    const isAdmin = await isUserAdmin()

    if (!isAdmin) return Response.json({ success: false }, { status: 401 })

    if (type === 'withdraw') {
      await withdrawFundsMXNMXNB({
        address,
        amount,
      })
    }

    if (type === 'swap') {
      await getQuote({
        amountIn: amount,
      })

      const trade = await createTrade({
        amountIn: amount,
      })

      const transactionHash = await executeTrade({
        trade,
        amountIn: amount,
      })

      return Response.json({ success: true, data: { transactionHash } })
    }

    if (type === 'deposit') {
      await stakeFunds({
        amountIn: amount,
      })

      const transactionHash = await depositToVault({
        amountIn: amount,
      })

      return Response.json({ success: true, data: { transactionHash } })
    }

    return Response.json({ success: true })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
