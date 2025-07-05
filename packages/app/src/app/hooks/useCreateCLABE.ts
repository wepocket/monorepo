import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { USE_FETCH_CLABE } from './useFetchCLABE'

export let USE_CREATE_CLABE: string[]

export const useCreateCLABE = () => {
  const queryClient = useQueryClient()

  USE_CREATE_CLABE = ['/createCLABE']

  const q = useMutation({
    mutationKey: USE_CREATE_CLABE,
    mutationFn: async () => {
      const { data } = await axios.post('/api/clabe')

      return data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: USE_FETCH_CLABE })
    },
  })

  return q
}
