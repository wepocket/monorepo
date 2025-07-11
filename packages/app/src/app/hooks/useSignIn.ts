import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const getIsSignedIn = () => {
  return typeof localStorage !== 'undefined' && localStorage.getItem('wp:SignedIn') === 'true'
}

export let USE_SIGN_IN: string[]

export const useSignIn = ({ id, password, email }: { id?: string; password: string; email: string }) => {
  USE_SIGN_IN = ['/signIn', id || '', password, email]

  const q = useMutation({
    mutationKey: USE_SIGN_IN,
    mutationFn: async () => {
      await axios.delete('/api/auth')

      const { data } = await axios.post('/api/auth', {
        id,
        password,
        email,
      })

      await axios.get('/api/clabe/deposit')

      return data
    },
    onSuccess: async () => {
      localStorage.setItem('wp:SignedIn', 'true')

      location.reload()
    },
  })

  return q
}
