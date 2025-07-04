import { createPublicClient, createWalletClient, http, PublicClient, WalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet, arbitrum } from 'viem/chains'

// import { localhost } from './network'

const currentChain = /* localhost || */ arbitrum || mainnet

export let chainId = 0

export const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS as `0x${string}`

export function getViemProvider() {
  const publicClient = createPublicClient({
    chain: currentChain,
    transport: http(),
  })

  return publicClient as PublicClient
}

export function getSigner() {
  const account = privateKeyToAccount(process.env.WALLET_SECRET as `0x${string}`)
  const walletClient = createWalletClient({
    account,
    chain: currentChain,
    transport: http(),
  })

  return walletClient as WalletClient
}

export const getChainId = async () => (chainId = await getViemProvider().getChainId())

getChainId()
