import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export let USE_SIGN_IN: string[]

export const useSignIn = ({ id, password, email }: { id?: string; password: string; email: string }) => {
  USE_SIGN_IN = ['/signIn', id || '', password, email]

  const q = useMutation({
    mutationKey: USE_SIGN_IN,
    mutationFn: async () => {
      const { data } = await axios.post('/api/auth', {
        id,
        password,
        email,
      })

      return data
    },
  })

  return q
}
