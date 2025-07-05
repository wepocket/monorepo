import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export let USE_SIGN_UP: string[]

export const useSignUp = ({ email, password, username }: { email: string; password: string; username: string }) => {
  USE_SIGN_UP = ['/signUp', email, password, username]

  const q = useMutation({
    mutationKey: USE_SIGN_UP,
    mutationFn: async () => {
      const { data } = await axios.post('/api/user', {
        email,
        password,
        username,
      })

      return data
    },
  })

  return q
}
