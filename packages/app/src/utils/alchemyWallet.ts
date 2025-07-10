import axios from 'axios'
import { arbitrum } from 'viem/chains'
import { MXNB_TOKEN_ARB } from './uniswap/constants'
import { encodeFunctionData, erc20Abi, parseUnits, toHex } from 'viem'
import { localAccount } from './viem'

export const ALCHEMY_WALLET_API_KEY = `https://api.g.alchemy.com`
const OWNER_ADDRESS = '0x2a1b75f0D91C6cBFe8285d5a8624965CDFdeBd63'

const alchemyWalletApi = axios.create({
  baseURL: ALCHEMY_WALLET_API_KEY,
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: `Bearer ${process.env.ALCHEMY_API_KEY}`,
  },
})

type WalletResponse = {
  orgId: string
  userId: string
  address: string
  solanaAddress: string
  otpId: string
}

export const createWallet = async ({ email }: { email: string }): Promise<WalletResponse> => {
  const { data } = await alchemyWalletApi.post(`/signer/v1/signup`, { email })

  return data
}

type AuthEmailResponse = {
  orgId: string
  otpId: string
}

export const authEmail = async ({
  email,
  targetPublicKey,
}: {
  email: string
  targetPublicKey: string
}): Promise<AuthEmailResponse> => {
  const { data } = await alchemyWalletApi.post(`/signer/v1/auth`, {
    email,
    targetPublicKey,
  })

  return data
}

export const authUser = async ({
  stampedRequest,
}: {
  stampedRequest: {
    body: string
    stamp: string
    stampHeaderName: string
    stampHeaderValue: string
  }
}): Promise<WalletResponse> => {
  const { data } = await alchemyWalletApi.post(`/signer/v1/whoami`, stampedRequest)

  return data
}

type RequestAccountResponse = {
  accountAddress: `0x${string}`
  id: string
}

export const requestAccount = async (): Promise<RequestAccountResponse> => {
  const { data } = await alchemyWalletApi.post(`/v2/${process.env.ALCHEMY_API_KEY}`, {
    id: 1,
    jsonrpc: '2.0',
    method: 'wallet_requestAccount',
    params: [
      {
        signerAddress: OWNER_ADDRESS,
      },
    ],
  })

  if (!data.result) {
    throw new Error('Failed to request account.')
  }

  return data.result
}

type PrepareCallsResponse = {
  result: { signatureRequest: { type: 'personal_sign'; data: { raw: `0x${string}` } } }
  error: { message: string }
}

export const prepareCalls = async ({
  accountAddress,
  to,
  amount,
}: {
  accountAddress: `0x${string}`
  to: `0x${string}`
  amount: number
}): Promise<PrepareCallsResponse> => {
  const { data } = await alchemyWalletApi.post(`/v2/${process.env.ALCHEMY_API_KEY}`, {
    id: 1,
    jsonrpc: '2.0',
    method: 'wallet_prepareCalls',
    params: [
      {
        capabilities: {
          paymasterService: {
            policyId: process.env.ALCHEMY_GAS_POLICY,
          },
        },
        calls: [
          {
            to: MXNB_TOKEN_ARB.address,
            value: '0x0',
            data: encodeFunctionData({
              abi: erc20Abi,
              args: [to, parseUnits(amount?.toString(), MXNB_TOKEN_ARB?.decimals || 18)],
              functionName: 'transfer',
            }),
          },
        ],
        from: accountAddress,
        chainId: toHex(arbitrum.id),
      },
    ],
  })

  return data
}

type SendCallsResponse = {
  result: {
    preparedCallIds: string[]
  }
}

export const sendCalls = async (
  request: PrepareCallsResponse['result'],
  message: `0x${string}`
): Promise<SendCallsResponse> => {
  const { data } = await alchemyWalletApi.post(`/v2/${process.env.ALCHEMY_API_KEY}`, {
    id: 1,
    jsonrpc: '2.0',
    method: 'wallet_sendPreparedCalls',
    params: [
      {
        ...request,
        // signatureRequest: undefined,
        signature: {
          type: 'secp256k1',
          data: message,
        },
      },
    ],
  })

  return data
}

type GetCallsStatusResponse = {
  result: {
    receipts: { transactionHash: string }[]
  }
}

export const getCallStatus = async ({ callId }: { callId: string }): Promise<GetCallsStatusResponse> => {
  const { data } = await alchemyWalletApi.post(`/v2/${process.env.ALCHEMY_API_KEY}`, {
    jsonrpc: '2.0',
    method: 'wallet_getCallsStatus',
    params: [[callId]],
    id: 1,
  })

  return data
}

export const sendFunds = async ({ to, amount }: { to: `0x${string}`; amount: number }) => {
  const { accountAddress } = await requestAccount()

  const { result, error } = await prepareCalls({
    accountAddress,
    to,
    amount,
  })

  if (error) {
    throw new Error(`${accountAddress}: ${error.message}`)
  }

  const signature = await localAccount.signMessage({
    message: result.signatureRequest.data,
  })

  const {
    result: {
      preparedCallIds: [callId],
    },
  } = await sendCalls(result, signature)

  const {
    result: {
      receipts: [{ transactionHash }],
    },
  } = await getCallStatus({ callId })

  return { transactionHash }
}
