import { ExecuteTrade, executeTrade } from '@/utils/uniswap/trading'
import { useMutation } from '@tanstack/react-query'

export let EXECUTE_TRADE_QUERY: string[]

export const useCreateTrade = ({ amountIn, tokenIn, trade, client, walletClient }: ExecuteTrade) => {
  EXECUTE_TRADE_QUERY = [
    '/executeTrade',
    tokenIn.address,
    trade.swaps.map((swap) => swap.route.tokenPath).join(','),
    amountIn.toString(),
    (client?.chain?.id || 0).toString(),
    walletClient?.account?.address || '',
  ]

  const q = useMutation({
    mutationKey: EXECUTE_TRADE_QUERY,
    mutationFn: () => executeTrade({ tokenIn, trade, amountIn, client }),
  })

  return q
}
