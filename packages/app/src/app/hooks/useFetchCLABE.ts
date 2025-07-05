import { Clabe } from '@/generated/prisma'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_CLABE: string[]

export const useFetchCLABE = () => {
  USE_FETCH_CLABE = ['/fetchCLABE']

  const q = useQuery({
    queryKey: USE_FETCH_CLABE,
    queryFn: async () => {
      const { data } = await axios.get('/api/clabe')

      return data.data as Clabe[]
    },
  })

  return q
}
