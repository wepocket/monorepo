import { getContract } from 'viem'
import { computePoolAddress } from '@uniswap/v3-sdk'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

import { CurrentConfig } from './config'
import { POOL_FACTORY_CONTRACT_ADDRESS, QUOTER_CONTRACT_ADDRESS } from './constants'

import { toReadableAmount, fromReadableAmount } from './conversion'
import { getViemProvider } from '../viem'

const provider = getViemProvider()

export async function quote(): Promise<string> {
  const quoterContract = getContract({
    address: QUOTER_CONTRACT_ADDRESS,
    abi: Quoter.abi,
    client: provider,
  })
  const poolConstants = await getPoolConstants()

  const quotedAmountOut = (await quoterContract.read.quoteExactInputSingle([
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(CurrentConfig.tokens.amountIn, CurrentConfig.tokens.in.decimals).toString(),
    0,
  ])) as number

  return toReadableAmount(quotedAmountOut, CurrentConfig.tokens.out.decimals)
}

async function getPoolConstants(): Promise<{
  token0: string
  token1: string
  fee: number
}> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: CurrentConfig.tokens.in,
    tokenB: CurrentConfig.tokens.out,
    fee: CurrentConfig.tokens.poolFee,
  }) as `0x${string}`

  const poolContract = getContract({
    address: currentPoolAddress,
    abi: IUniswapV3PoolABI.abi,
    client: provider,
  })
  const [token0, token1, fee] = (await Promise.all([
    poolContract.read.token0(),
    poolContract.read.token1(),
    poolContract.read.fee(),
  ])) as [`0x${string}`, `0x${string}`, number]

  return {
    token0,
    token1,
    fee,
  }
}
