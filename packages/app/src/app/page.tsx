'use client'

import { useEffect, useState } from 'react'
// import { EXAMPLE_ITEMS } from './examples/examples'

// import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { quote } from '@/utils/uniswap/quote'
import { usePublicClient } from 'wagmi'
import { Token } from '@uniswap/sdk-core'
import { AVAILABLE_TOKENS } from '@/utils/uniswap/constants'

export default function Home() {
  const [tokenIn, setTokenIn] = useState<Token>()
  const [tokenOut, setTokenOut] = useState<Token>()
  const [amountIn, setAmoutIn] = useState<number>(0)
  const [_quote, setQuote] = useState<string>()
  const client = usePublicClient()

  useEffect(() => {
    console.log('tokenIn', tokenIn, 'tokenOut', tokenOut, 'amountIn', amountIn)
    if (tokenIn && tokenOut && amountIn)
      quote({
        tokenIn,
        tokenOut,
        amountIn,
        client,
      }).then((q) => {
        console.log('quote', q)
        setQuote(q)
      })
  }, [tokenIn, tokenOut, client, amountIn])

  return (
    <div className=''>
      <p>
        Token In:
        <select
          onChange={(e) => setTokenIn(AVAILABLE_TOKENS.find((t) => t.address === e.target.value))}
          className='ml-8 bg-white text-black'>
          {AVAILABLE_TOKENS.map((t) => (
            <option value={t.address} key={t.address}>
              {t.symbol + ' - ' + t.chainId}
            </option>
          ))}
        </select>
      </p>
      <p>
        Token Out:
        <select
          onChange={(e) => setTokenOut(AVAILABLE_TOKENS.find((t) => t.address === e.target.value))}
          className='ml-8 bg-white text-black'>
          {AVAILABLE_TOKENS.map((t) => (
            <option value={t.address} key={t.address}>
              {t.symbol + ' - ' + t.chainId}
            </option>
          ))}
        </select>
      </p>
      <p>
        Amount In:{' '}
        <input
          onChange={(e) => setAmoutIn(parseFloat(e.target.value))}
          className='ml-8 px-3 bg-white text-black'
          placeholder='0.00'
        />
      </p>
      <p>Quote: {_quote}</p>
    </div>
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
