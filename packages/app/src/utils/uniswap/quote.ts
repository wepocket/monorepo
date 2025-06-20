import { getContract, PublicClient } from 'viem'
import { computePoolAddress } from '@uniswap/v3-sdk'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import { Token } from '@uniswap/sdk-core'

import { CurrentConfig } from './config'
import { POOL_FACTORY_CONTRACT_ADDRESS, QUOTER_CONTRACT_ADDRESS } from './constants'

import { toReadableAmount, fromReadableAmount } from './conversion'
import { getViemProvider } from '../viem'

export async function getPoolInfo({
  tokenIn,
  tokenOut,
  provider,
}: {
  tokenIn: Token
  tokenOut: Token
  provider: PublicClient
}): Promise<{
  token0: string
  token1: string
  fee: number
  tickSpacing: number
  liquidity: bigint
  sqrtPriceX96: bigint
  tick: number
}> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    // tokenA: CurrentConfig.tokens.in,
    // tokenB: CurrentConfig.tokens.out,
    tokenA: tokenIn,
    tokenB: tokenOut,
    fee: CurrentConfig.tokens.poolFee,
  }) as `0x${string}`

  const poolContract = getContract({
    address: currentPoolAddress,
    abi: IUniswapV3PoolABI.abi,
    client: provider,
  })
  const [token0, token1, fee, tickSpacing, liquidity, slot0] = (await Promise.all([
    poolContract.read.token0(),
    poolContract.read.token1(),
    poolContract.read.fee(),
    poolContract.read.tickSpacing(),
    poolContract.read.liquidity(),
    poolContract.read.slot0(),
  ])) as [`0x${string}`, `0x${string}`, number, number, bigint, [sqrtPriceX96: bigint, tick: number]]

  return {
    token0,
    token1,
    fee,
    tickSpacing,
    liquidity,
    sqrtPriceX96: slot0[0],
    tick: slot0[1],
  }
}

export async function getQuote({
  tokenIn,
  tokenOut,
  amountIn,
  client,
}: {
  tokenIn: Token
  tokenOut: Token
  amountIn: number
  client?: PublicClient
}): Promise<string> {
  const provider = client || getViemProvider()

  const quoterContract = getContract({
    address: QUOTER_CONTRACT_ADDRESS,
    abi: Quoter.abi,
    client: provider,
  })
  const poolConstants = await getPoolInfo({
    tokenIn,
    tokenOut,
    provider,
  })

  const quotedAmountOut = (await quoterContract.read.quoteExactInputSingle([
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(/* CurrentConfig.tokens.amountIn */ amountIn, tokenIn.decimals).toString(),
    0,
  ])) as number

  return toReadableAmount(quotedAmountOut, tokenOut.decimals)
}
