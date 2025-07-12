'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { SendFunds } from '@/components/SendFunds'
import { SignIn } from '@/components/SignIn'

import { getIsSignedIn } from './hooks/useSignIn'
import { ReadQR } from '@/components/ReadQR'
import { Home } from '@/components/Home'

import * as screenLoader from '../assets/screen-loader.json'
import { useWindowAction_DEV } from './hooks/useWindowAction'

// import { EXAMPLE_ITEMS } from './examples/examples'

// import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

const screens = [<Home key={0} />, <ReadQR key={1} />, <DisplayQR key={2} />, 'Receive']

const Nav = () => {
  const [screenId, setScreenId] = useState(0)
  const { setAction } = useWindowAction_DEV()

  useEffect(() => {
    setAction('setScreenId', (id) => {
      setScreenId(id as typeof screenId)
    })
  }, [setScreenId])

  return screens[screenId]
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

  // return (
  //   <>
  //     <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
  //     <p>{SITE_DESCRIPTION}</p>

  //     {/* Examples are only used for demo purposes. Feel free to delete this section */}
  //     <div className='mt-4'>
  //       <h3 className='text-lg mb-2'>Examples</h3>
  //       <p className='mb-4'>
  //         The following examples are used for demo purposes and help you bootstrap development. You can find the example
  //         the main repo at <code>src/app/examples</code>. Feel free to delete this section and the examples folder for
  //         your own App.
  //       </p>

  //       <CardList items={EXAMPLE_ITEMS} />
  //     </div>
  //   </>
  // )
}
