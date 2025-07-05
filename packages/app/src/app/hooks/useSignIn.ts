import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export let USE_SIGN_IN: string[]

export const useSignIn = ({ id, password, username }: { id: string; password: string; username: string }) => {
  USE_SIGN_IN = ['/signIn', id, password, username]

  const q = useMutation({
    mutationKey: USE_SIGN_IN,
    mutationFn: async () => {
      const { data } = await axios.post('/api/auth', {
        id,
        password,
        username,
      })

      return data
    },
  })

  return q
}
