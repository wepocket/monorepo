'use client'

import { useEffect, useState } from 'react'
// import { EXAMPLE_ITEMS } from './examples/examples'

// import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { getQuote } from '@/utils/uniswap/quote'
import { usePublicClient, useWalletClient } from 'wagmi'
import { Token, TradeType } from '@uniswap/sdk-core'
import { AVAILABLE_TOKENS } from '@/utils/uniswap/constants'
import { createTrade, executeTrade, TransactionState } from '@/utils/uniswap/trading'
import { Trade } from '@uniswap/v3-sdk'

export default function Home() {
  const [tokenIn, setTokenIn] = useState<Token>()
  const [tokenOut, setTokenOut] = useState<Token>()
  const [amountIn, setAmoutIn] = useState<number>(0)
  const [quote, setQuote] = useState<string>()
  const [trade, setTrade] = useState<Trade<Token, Token, TradeType> | undefined>()
  const [txHash, setTxHash] = useState<`0x${string}` | TransactionState>()
  const client = usePublicClient()
  const { data: walletClient } = useWalletClient()

  useEffect(() => {
    if (tokenIn && tokenOut && amountIn)
      getQuote({
        tokenIn,
        tokenOut,
        amountIn,
        client,
      }).then(setQuote)
  }, [tokenIn, tokenOut, client, amountIn])

  const onCreateTrade = async () => {
    if (tokenIn && tokenOut && amountIn)
      createTrade({
        amountIn,
        tokenIn,
        tokenOut,
        client,
        walletClient,
      }).then(setTrade)
  }

  const onExecuteTrade = async () => {
    if (tokenIn && tokenOut && amountIn && trade)
      executeTrade({ amountIn, tokenIn, trade, client, walletClient }).then(setTxHash)
  }

  return (
    <div className=''>
      <p>
        Token In:
        <select
          onChange={(e) => setTokenIn(AVAILABLE_TOKENS.find((t) => t.address + '_' + t.chainId === e.target.value))}
          className='ml-8 bg-white text-black'>
          {AVAILABLE_TOKENS.map((t) => (
            <option value={t.address + '_' + t.chainId} key={t.address + '_' + t.chainId}>
              {t.symbol + ' - ' + t.chainId}
            </option>
          ))}
        </select>
      </p>
      <p>
        Token Out:
        <select
          onChange={(e) => setTokenOut(AVAILABLE_TOKENS.find((t) => t.address + '_' + t.chainId === e.target.value))}
          className='ml-8 bg-white text-black'>
          {AVAILABLE_TOKENS.map((t) => (
            <option value={t.address + '_' + t.chainId} key={t.address + '_' + t.chainId}>
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
      {quote && <p>Quote: {quote}</p>}
      {quote && (
        <p>
          <button onClick={onCreateTrade}>Create Trade</button>
        </p>
      )}
      {quote && (
        <p>
          <button onClick={onExecuteTrade}>Execute Trade</button>
        </p>
      )}
      {txHash && <p>Transaction hash: {txHash}</p>}
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
