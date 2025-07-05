import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { USE_FETCH_CLABE } from './useFetchCLABE'

export let USE_CREATE_WALLET: string[]

export const useCreateWallet = () => {
  const queryClient = useQueryClient()

  USE_CREATE_WALLET = ['/createWallet']

  const q = useMutation({
    mutationKey: USE_CREATE_WALLET,
    mutationFn: async () => {
      const { data } = await axios.post('/api/wallet')

      return data
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: USE_FETCH_CLABE })
    },
  })

  return q
}
