'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { SendFunds } from '@/components/SendFunds'
import { SignIn } from '@/components/SignIn'

import { getIsSignedIn } from './hooks/useSignIn'
import { Home } from '@/components/Home'

import { FaQrcode } from 'react-icons/fa6'

import { Pay } from '@/components/Pay'
import { PayQR } from '@/components/Pay'
import { useNavigationState } from '@/utils/navigationState'
import * as screenLoader from '../assets/screen-loader.json'
import { useWindowAction_DEV } from './hooks/useWindowAction'

const screens = [<Home key={0} />, <Pay key={1} />, <PayQR key={2} />, 'Receive']

const Nav = () => {
  const [screenId, setScreenId] = useNavigationState()
  const { setAction } = useWindowAction_DEV()

  useEffect(() => {
    setAction('setScreenId', (id) => {
      setScreenId(id as typeof screenId)
    })
  }, [setAction, setScreenId])

  return (
    <>
      {screens[screenId]}
      {screenId === 0 && (
        <div className='flex justify-center items-center mt-5'>
          <div className='w-16 h-16 px-[5px] py-2.5 bg-base-s1 rounded-[10px] outline outline-1 outline-offset-[-0.50px] outline-stroke-st2 flex flex-col justify-center items-center overflow-hidden'>
            <button className='w-6 h-6 relative overflow-hidden' onClick={() => setScreenId(2)}>
              <FaQrcode className='w-full h-full' size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function App() {
  const [isReady, setIsReady] = useState(false)
  const isSignedIn = getIsSignedIn()

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 1500)
  }, [])

  if (!isReady) {
    return (
      <div className='flex justify-center items-center h-screen -mt-[50px]'>
        <Lottie animationData={screenLoader} />
      </div>
    )
  }

  return (
    <>
      {isSignedIn ? <Nav /> : <SignIn />}
      {false && <SendFunds />}
    </>
  )
}
