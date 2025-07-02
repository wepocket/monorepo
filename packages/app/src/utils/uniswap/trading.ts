import { Currency, CurrencyAmount, Percent, Token, TradeType } from '@uniswap/sdk-core'
import { Account, decodeAbiParameters, erc20Abi, Hash, PublicClient, WalletClient } from 'viem'

import { getSigner, getViemProvider } from '../viem'
import { fromReadableAmount } from './conversion'
import { MAX_FEE_PER_GAS, MAX_PRIORITY_FEE_PER_GAS, SWAP_ROUTER_ADDRESS } from './constants'
import { getPoolInfo } from './quote'
import { Pool, Route, SwapOptions, SwapQuoter, SwapRouter, Trade } from '@uniswap/v3-sdk'
import { CurrentConfig } from './config'

export type TokenTrade = Trade<Token, Token, TradeType>

export enum TransactionState {
  Failed = 'Failed',
  New = 'New',
  Rejected = 'Rejected',
  Sending = 'Sending',
  Sent = 'Sent',
}

export type ExecuteTrade = {
  amountIn: number
  tokenIn: Token
  trade: TokenTrade
  client?: PublicClient
  walletClient?: WalletClient
}

export async function executeTrade({
  amountIn,
  tokenIn,
  trade,
  client,
  walletClient,
}: ExecuteTrade): Promise<TransactionState | Hash> {
  const provider = client || getViemProvider()
  const signer = walletClient || getSigner()
  const walletAddress = signer.account?.address

  if (!walletAddress || !provider) {
    throw new Error('Cannot execute a trade without a connected wallet')
  }

  /* const tokenApproval = */ await getTokenTransferApproval({ token: tokenIn, provider, signer, amountIn })

  // if (tokenApproval !== TransactionState.Sent) {
  //   return TransactionState.Failed
  // }

  const options: SwapOptions = {
    slippageTolerance: new Percent(50, 10_000), // 50 bips, or 0.50%
    deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes from the current Unix time
    recipient: walletAddress,
  }

  const methodParameters = SwapRouter.swapCallParameters([trade], options)

  const tx = {
    data: methodParameters.calldata as `0x${string}`,
    to: SWAP_ROUTER_ADDRESS as `0x${string}`,
    value: BigInt(methodParameters.value),
    account: walletAddress,
    maxFeePerGas: BigInt(MAX_FEE_PER_GAS),
    maxPriorityFeePerGas: BigInt(MAX_PRIORITY_FEE_PER_GAS),
    chain: provider.chain,
  }

  const res = await signer.sendTransaction(tx)

  return res
}

async function getOutputQuote({
  tokenIn,
  amountIn,
  route,
  provider,
  account,
}: {
  tokenIn: Token
  amountIn: number
  route: Route<Currency, Currency>
  provider: PublicClient
  account: Account
}) {
  if (!provider) {
    throw new Error('Provider required to get pool state')
  }

  const { calldata } = await SwapQuoter.quoteCallParameters(
    route,
    CurrencyAmount.fromRawAmount(tokenIn, fromReadableAmount(amountIn, tokenIn.decimals).toString()),
    TradeType.EXACT_INPUT,
    {
      useQuoterV2: true,
    }
  )
  // https://tools.deth.net/calldata-decoder 0xc6a5026a000000000000000000000000f197ffc28c23e0309b5559e7a166f2c6164c80aa000000000000000000000000fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb900000000000000000000000000000000000000000000000000000000009896800000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000000000000000000000000000000

  const quoteCallReturnData = await provider.call({
    account,
    to: '0x61fFE014bA17989E743c5F6cB21bF9697530B21e', // QUOTER_CONTRACT_ADDRESS,
    data: calldata as `0x${string}`,
  })

  return decodeAbiParameters([{ type: 'uint256', name: 'x' }], quoteCallReturnData.data as `0x${string}`)
}

export type CreateTrade = {
  tokenIn: Token
  tokenOut: Token
  amountIn: number
  client?: PublicClient
  walletClient?: WalletClient
}

export async function createTrade({
  tokenIn,
  tokenOut,
  amountIn,
  client,
  walletClient,
}: CreateTrade): Promise<TokenTrade> {
  const provider = client || getViemProvider()
  const signer = walletClient || getSigner()

  const poolInfo = await getPoolInfo({
    tokenIn,
    tokenOut,
    provider,
  })

  const pool = new Pool(
    tokenIn,
    tokenOut,
    CurrentConfig.tokens.poolFee,
    poolInfo.sqrtPriceX96.toString(),
    poolInfo.liquidity.toString(),
    poolInfo.tick
  )

  const swapRoute = new Route([pool], tokenIn, tokenOut)

  const [amountOut] = await getOutputQuote({
    tokenIn,
    amountIn,
    account: signer.account as Account,
    route: swapRoute,
    provider,
  })

  const uncheckedTrade = Trade.createUncheckedTrade({
    route: swapRoute,
    inputAmount: CurrencyAmount.fromRawAmount(tokenIn, fromReadableAmount(amountIn, tokenIn.decimals).toString()),
    outputAmount: CurrencyAmount.fromRawAmount(tokenOut, amountOut.toString()),
    tradeType: TradeType.EXACT_INPUT,
  })

  return uncheckedTrade
}

export async function getTokenTransferApproval({
  token,
  provider,
  signer,
  amountIn,
}: {
  token: Token
  provider: PublicClient
  signer: WalletClient
  amountIn: number
}): Promise<TransactionState | Hash> {
  if (!provider) {
    console.log('No Provider Found')

    return TransactionState.Failed
  }

  try {
    const { request } = await provider.simulateContract({
      address: token.address as `0x${string}`,
      account: signer.account,
      abi: erc20Abi,
      args: [SWAP_ROUTER_ADDRESS, fromReadableAmount(amountIn, token.decimals)],
      functionName: 'approve',
    })

    return await signer.writeContract(request)
  } catch (e) {
    console.error(e)
    return TransactionState.Failed
  }
}
