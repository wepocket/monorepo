// import { GetQuote, getQuote } from '@/utils/uniswap/quote'
// import { useQuery } from '@tanstack/react-query'

// export let GET_QUOTE_QUERY: string[]

// export const useGetQuote = ({ tokenIn, tokenOut, amountIn, client }: GetQuote) => {
//   GET_QUOTE_QUERY = [
//     '/getQuote',
//     tokenIn.address,
//     tokenOut.address,
//     amountIn.toString(),
//     (client?.chain?.id || 0).toString(),
//   ]

//   const q = useQuery({
//     queryKey: GET_QUOTE_QUERY,
//     queryFn: () => getQuote({ tokenIn, tokenOut, amountIn, client }),
//     enabled: Boolean(tokenIn && tokenOut && amountIn && client),
//   })

//   return q
// }
