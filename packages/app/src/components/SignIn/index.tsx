import { useSignIn } from '@/app/hooks/useSignIn'
import { useState } from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const { mutate: signInMutate } = useSignIn({ email, password: 'root' })

  return (
    <div className='flex flex-col gap-4 w-full mt-36'>
      <img src='/img/logo-lg.svg' alt='Logo' />
      <input className='input input-bordered w-full' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <button
        className='btn btn-primary rounded-md h-[54px]'
        onClick={() => {
          signInMutate()
        }}>
        Entrar
      </button>
    </div>
  )
}
