import { useSignIn } from '@/app/hooks/useSignIn'
import { useState } from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const { mutate: signInMutate } = useSignIn({ email, password: 'root' })

  return (
    <div className=''>
      <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <button
        onClick={() => {
          signInMutate()
        }}>
        Sign In
      </button>
    </div>
  )
}
