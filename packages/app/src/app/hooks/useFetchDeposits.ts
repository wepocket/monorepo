import { GetDepositsResponse } from '@/utils/bitso'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_DEPOSITS: string[]

export const useFetchDeposits = () => {
  USE_FETCH_DEPOSITS = ['/fetchDeposits']

  const q = useQuery({
    queryKey: USE_FETCH_DEPOSITS,
    queryFn: async () => {
      const { data } = await axios.get('/api/clabe/deposit')

      return data.data as GetDepositsResponse['response']
    },
  })

  return q
}
