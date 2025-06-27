'use client'

import { useEffect, useState } from 'react'
// import { EXAMPLE_ITEMS } from './examples/examples'

// import { CardList } from '@/components/CardList'
// import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { usePublicClient, useWalletClient } from 'wagmi'
import { Token, TradeType } from '@uniswap/sdk-core'
import { AVAILABLE_TOKENS } from '@/utils/uniswap/constants'
import { Trade } from '@uniswap/v3-sdk'
import { arbitrum } from 'viem/chains'

import { getQuote } from '@/utils/uniswap/quote'
import { createTrade, executeTrade, TransactionState } from '@/utils/uniswap/trading'
import {
  depositToVault,
  getUserStakingState,
  setStakingReceiverAddress,
  stakeFunds,
  StakingStatus,
  unstakeFunds,
} from '@/utils/wepocket'
import { localhost } from '@/utils/network'
import { isDevEnv, WEPOCKET_STAKING_RECEIVER_ADDRESS } from '@/utils/wepocket/constants'

export default function Home() {
  const [tokenIn, setTokenIn] = useState<Token>()
  const [tokenOut, setTokenOut] = useState<Token>()
  const [amountIn, setAmoutIn] = useState<number>(0)
  const [quote, setQuote] = useState<string>()
  const [trade, setTrade] = useState<Trade<Token, Token, TradeType> | undefined>()
  const [txHash, setTxHash] = useState<`0x${string}` | TransactionState>()
  const [txHashStake, setTxHashStake] = useState<`0x${string}` | TransactionState>()
  const [userStakingState, setUserStakingState] = useState<StakingStatus | undefined>()
  const clientArb = usePublicClient({ chainId: isDevEnv ? localhost.id : arbitrum.id })

  const { data: walletClient } = useWalletClient()

  useEffect(() => {
    if (tokenIn && tokenOut && amountIn)
      getQuote({
        tokenIn,
        tokenOut,
        amountIn,
        client: clientArb,
      }).then(setQuote)
  }, [tokenIn, tokenOut, clientArb, amountIn])

  useEffect(() => {
    getUserStakingState({
      address: walletClient?.account.address as `0x${string}`,
      client: clientArb,
    }).then(setUserStakingState)
  }, [clientArb, walletClient?.account.address])

  const onCreateTrade = async () => {
    if (tokenIn && tokenOut && amountIn)
      createTrade({
        amountIn,
        tokenIn,
        tokenOut,
        client: clientArb,
        walletClient,
      }).then(setTrade)
  }

  const onExecuteTrade = async () => {
    if (tokenIn && tokenOut && amountIn && trade)
      executeTrade({ amountIn, tokenIn, trade, client: clientArb, walletClient }).then(setTxHash)
  }

  // eslint-disable-next-line
  const _handleOnStakeFunds = async () => {
    if (quote)
      stakeFunds({
        amountIn: Number(quote),
        client: clientArb,
        walletClient,
      }).then(setTxHashStake)
  }

  const handleOnStakeFunds = async () => {
    stakeFunds({
      amountIn: 0.01,
      client: clientArb,
      walletClient,
    }).then(setTxHashStake)
  }

  const handleOnUnstakeFunds = async () => {
    if (userStakingState) unstakeFunds({ client: clientArb, walletClient })
  }

  const handleOnDepositoToVault = async () => {
    await setStakingReceiverAddress({
      address: WEPOCKET_STAKING_RECEIVER_ADDRESS,
      client: clientArb,
      walletClient,
    })

    depositToVault({
      amountIn: 0.1,
      client: clientArb,
      walletClient,
    })
      .then(console.log)
      .catch(console.log)
  }

  return (
    <div className=''>
      <p>
        <button className='bg-gray-500' onClick={handleOnDepositoToVault}>
          Deposit to Vault (0.1 USDC)
        </button>
      </p>
      {userStakingState?.isUserStaking && (
        <p>
          <button className='bg-gray-500' onClick={handleOnUnstakeFunds}>
            Unkstake Funds {userStakingState.stakingBalance} USDC
          </button>
        </p>
      )}
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
          <button className='bg-gray-500' onClick={onCreateTrade}>
            Create Trade
          </button>
        </p>
      )}
      {quote && (
        <p>
          <button className='bg-gray-500' onClick={onExecuteTrade}>
            Execute Trade
          </button>
        </p>
      )}
      {txHash && <p>Transaction hash: {txHash}</p>}
      <p>
        <button onClick={handleOnStakeFunds} className='bg-gray-500'>
          Stake USDT Funds
        </button>
      </p>
      {txHashStake && <p>Transaction hash: {txHashStake}</p>}
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
