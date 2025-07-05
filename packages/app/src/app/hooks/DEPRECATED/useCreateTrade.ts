// import { CreateTrade, createTrade } from '@/utils/uniswap/trading'
// import { useMutation } from '@tanstack/react-query'

// export let CREATE_TRADE_QUERY: string[]

// export const useCreateTrade = ({ tokenIn, tokenOut, amountIn, client, walletClient }: CreateTrade) => {
//   CREATE_TRADE_QUERY = [
//     '/createTrade',
//     tokenIn.address,
//     tokenOut.address,
//     amountIn.toString(),
//     (client?.chain?.id || 0).toString(),
//     walletClient?.account?.address || '',
//   ]

//   const q = useMutation({
//     mutationKey: CREATE_TRADE_QUERY,
//     mutationFn: () => createTrade({ tokenIn, tokenOut, amountIn, client }),
//   })

//   return q
// }
