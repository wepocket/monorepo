import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'
import { TransactionRequest } from 'viem'
import { arbitrum } from 'viem/chains'

export const PORTALHQ_MPC_API_HOST = 'https://mpc-client.portalhq.io'

const portalMpcApi = applyCaseMiddleware(
  axios.create({
    baseURL: PORTALHQ_MPC_API_HOST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PORTALHQ_API_KEY}`,
    },
  })
)

export const PORTALHQ_API_HOST = 'https://api.portalhq.io/api'

const portalApi = applyCaseMiddleware(
  axios.create({
    baseURL: PORTALHQ_API_HOST,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PORTALHQ_API_KEY}`,
    },
  })
)

export type CreateWalletResponse = {
  SECP256K1: {
    share: string
    id: string
  }
  ED25519: {
    share: string
    id: string
  }
}

export const createWallet = async (): Promise<CreateWalletResponse> => {
  const { data } = await portalMpcApi.post('/v1/generate')

  return data
}

export const storeWalletShares = async (d: CreateWalletResponse): Promise<void> => {
  await axios.post('/api/wallet', d)
}

export const confirmShares = async (id1: string, id2: string): Promise<void> => {
  await portalApi.post('/v3/clients/me/signing-share-pairs', {
    status: 'STORED_CLIENT',
    signingSharePairIds: [id1, id2],
  })
}

export type GetWalletAddressResponse = {
  metadata: {
    namespaces: {
      bip122: {
        address: string
        curve: string
        bitcoin: {
          p2wpkh: {
            mainnet: string
            testnet: string
          }
        }
      }
      solana: {
        address: string
        curve: string
      }
      stellar: {
        address: string
        curve: string
      }
      eip155: {
        address: string
        curve: string
      }
      tron: {
        address: string
        curve: string
      }
    }
  }
}

export const getWalletAddress = async (): Promise<GetWalletAddressResponse> => {
  const { data } = await portalApi.get('/v3/clients/me')

  return data
}

export const getFundsTESTNET = async (): Promise<void> => {
  await portalApi.post('/v3/clients/me/funds', {
    chainId: `eip155:${arbitrum.id}`,
    token: 'NATIVE',
    amount: '0.01',
  })
}

export type SendFundsResponse = {
  transactionHash: string
  metadata: {
    amount: string
    rawAmount: string
    tokenDecimals: number
    tokenSymbol: string
  }
}

export const sendFunds = async ({
  share,
  chain,
  token,
  to,
  amount,
}: {
  share: string
  chain: string
  token: 'NATIVE' | `0x${string}`
  to: `0x${string}`
  amount: number
}): Promise<SendFundsResponse> => {
  const { data } = await portalMpcApi.post('/v1/assets/send', {
    share,
    chain,
    token,
    to,
    amount,
    rpcUrl: `https://api.portalhq.io/rpc/v1/eip155/${arbitrum.id}`,
  })

  return data
}

export const signTransaction = async ({ tx, share }: { tx: TransactionRequest; share: string }): Promise<void> => {
  await portalMpcApi.post('/v1/sign', {
    share,
    method: 'eth_sendTransaction',
    params: tx,
    rpcUrl: 'https://sepolia.infura.io/v3/f6a2916eba63419fb60fdd3b30797ef1',
    chainId: `eip155:${arbitrum.id}`,
  })
}
