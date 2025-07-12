import React, { PropsWithChildren } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout(props: PropsWithChildren) {
  return (
    <div className='flex flex-col min-h-screen bg-[var(--fondos-bg1,#f1f4f8)]'>
      {false && <Header />}

      <main className='flex flex-col grow w-full py-4 container max-w-3xl mx-auto'>{props.children}</main>

      {false && <Footer />}
    </div>
  )
}
