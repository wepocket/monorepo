import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_USER_LOOKUP: string[]

export const useUserLookup = () => {
  USE_USER_LOOKUP = ['/userLookup']

  const q = useQuery({
    queryKey: USE_USER_LOOKUP,
    queryFn: async () => {
      const { data } = await axios.get('/api/user/lookup')

      return data.users as {
        email: string
        username: string
      }[]
    },
  })

  return q
}
