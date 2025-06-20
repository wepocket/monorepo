// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { Token } from '@uniswap/sdk-core'
import { mainnet, arbitrum } from 'viem/chains'

// Addresses

export const SWAP_ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564'
export const POOL_FACTORY_CONTRACT_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const QUOTER_CONTRACT_ADDRESS = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'

// Currencies and Tokens

export const WETH_TOKEN_MAINNET = new Token(
  mainnet.id,
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  18,
  'WETH',
  'Wrapped Ether'
)

export const USDC_TOKEN_MAINNET = new Token(
  mainnet.id,
  '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  6,
  'USDC',
  'USD//C'
)

export const MXNB_TOKEN_ARB = new Token(arbitrum.id, '0xF197FFC28c23E0309B5559e7a166f2c6164C80aA', 6, 'MXNB', 'MXNB')

export const USDT_TOKEN_ARB = new Token(arbitrum.id, '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', 6, 'USDT', 'USDT')
export const USDC_TOKEN_ARB = new Token(arbitrum.id, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USDC')

export const AVAILABLE_TOKENS = [WETH_TOKEN_MAINNET, USDC_TOKEN_MAINNET, MXNB_TOKEN_ARB, USDT_TOKEN_ARB, USDC_TOKEN_ARB]

export const MAX_FEE_PER_GAS = 100000000
export const MAX_PRIORITY_FEE_PER_GAS = 100000000
export const TOKEN_AMOUNT_TO_APPROVE_FOR_TRANSFER = 2000
