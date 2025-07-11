'use client'

import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { DisplayBalance } from '@/components/DisplayBalance'
import { DisplayTransactions } from '@/components/DisplayTransactions'
import { SendFunds } from '@/components/SendFunds'
import { SignIn } from '@/components/SignIn'
import { useFetchUser } from './hooks/useFetchUser'
import { getIsSignedIn } from './hooks/useSignIn'

import * as screenLoader from '../assets/screen-loader.json'

// import { EXAMPLE_ITEMS } from './examples/examples'

// import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

const Staking = () => {
  return (
    <div className='self-stretch px-2.5 inline-flex flex-col justify-start items-start'>
      <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex flex-col justify-start items-start gap-[5px]'>
          <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica']">
            Cuenta Crecimiento
          </div>
          <div className="w-80 h-3.5 justify-start text-Texto-BTO2 text-xs font-normal font-['Helvetica']">
            Saldo disponible en tu cuenta
          </div>
        </div>
        <div className='self-stretch inline-flex justify-start items-start gap-2.5'>
          <div className='flex-1 px-[5px] py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Beneficios generados</div>
            <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">+</div>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">$</div>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">2450,50</div>
            </div>
          </div>
          <div className='flex-1 px-[5px] py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Tu APY</div>
            <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">13%</div>
            </div>
          </div>
        </div>
        <div className='self-stretch px-[5px] py-2.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-center items-center overflow-hidden'>
          <div className="text-center justify-start text-sky-800 text-base font-bold font-['Helvetica'] leading-none">
            Reclamar beneficios
          </div>
        </div>
      </div>
    </div>
  )
}

const HomeHeader = () => {
  const { data } = useFetchUser()

  return (
    <div className='w-full self-stretch px-3.5 py-2.5 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
      <img className='w-10 h-10 rounded-[77px]' src='https://placehold.co/40x40' />
      <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">
        Hola {data?.username}!
      </div>
      <div className='flex justify-end items-end'>
        <div className='w-5 h-5 bg-blue-600 rounded-full border border-black' />
        <div className='w-9 h-9 bg-white rounded-full border border-stroke-st2' />
      </div>
    </div>
  )
}

const HomeScreen = () => {
  return (
    <div className='flex flex-col gap-2.5 w-full'>
      <HomeHeader />

      <DisplayBalance />

      <Staking />

      <DisplayTransactions />
    </div>
  )
}

export default function Home() {
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
      {isSignedIn ? <HomeScreen /> : <SignIn />}
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
