import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_CLABE_BALANCE: string[]

export const useFetchBalance = () => {
  USE_FETCH_CLABE_BALANCE = ['/fetchBalance']

  const q = useQuery({
    queryKey: USE_FETCH_CLABE_BALANCE,
    queryFn: async () => {
      const { data } = await axios.get('/api/user/balance')

      return data.data as { balance: string } & { stakingBalance: number }
    },
  })

  return q
}
