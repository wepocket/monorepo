import { User } from '@/generated/prisma'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_USER: string[]

export const useFetchUser = () => {
  USE_FETCH_USER = ['/fetchUser']

  const q = useQuery({
    queryKey: USE_FETCH_USER,
    queryFn: async () => {
      const { data } = await axios.get('/api/user')

      return data.user as User
    },
  })

  return q
}
