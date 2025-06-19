import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { /* USDC_TOKEN_MAINNET, WETH_TOKEN_MAINNET, */ MXNB_TOKEN_ARB, USDT_TOKEN_ARB } from './constants'

// Inputs that configure this example to run
export interface ExampleConfig {
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  tokens: {
    in: MXNB_TOKEN_ARB,
    amountIn: 170000,
    out: USDT_TOKEN_ARB,
    poolFee: FeeAmount.MEDIUM,
  },
}
