import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_WALLET: string[]

export const useFetchWallet = () => {
  USE_FETCH_WALLET = ['/fetchWallet']

  const q = useQuery({
    queryKey: USE_FETCH_WALLET,
    queryFn: async () => {
      const { data } = await axios.get('/api/wallet')

      return data.data as { defaultWallet: string }
    },
  })

  return q
}
