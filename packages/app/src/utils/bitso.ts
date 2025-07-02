import crypto from 'crypto'
import applyCaseMiddleware from 'axios-case-converter'
import axios, { AxiosInstance } from 'axios'

export const BITSO_API_HOST = 'https://stage.buildwithjuno.com'

export const initBitsoApi = async ({
  url,
  method,
  payload,
}: {
  url: string
  method: 'get' | 'post' | 'delete' | 'put' | 'patch'
  payload?: unknown
}) => {
  const nonce = Date.now().toString()
  const httpMethod = method.toUpperCase()
  const payloadString = payload ? JSON.stringify(payload) : ''
  const signature = crypto
    .createHmac('sha1', process.env.BITSO_SECRET_KEY as string)
    .update(`${nonce}${httpMethod}${url}${payloadString}`)
    .digest('hex')
  const authHeader = `${process.env.BITSO_API_KEY}:${nonce}:${signature}`

  console.log({ authHeader: `Bitso ${authHeader}`, authHeaderRaw: `${nonce}${httpMethod}${url}${payloadString}` })

  const bitsoApi = applyCaseMiddleware(
    axios.create({
      baseURL: BITSO_API_HOST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bitso ${authHeader}`,
      },
    })
  ) as AxiosInstance

  const { data } = await bitsoApi[method](url, payload || '')

  return { data }
}

export type AccountDetailsResponse = {
  success: boolean
  payload: {
    totalItems: string
    totalPages: string
    currentPage: string
    pageSize: string
    response: Array<{
      clabe: string
      type: string
      status: string
      depositMinimumAmount: number
      depositMaximumAmounts: {
        operation: number
        daily: number
        weekly: number
        monthly: number
      }
      createdAt: string
      updatedAt: string
    }>
  }
}

export const getAccountDetails = async (): Promise<AccountDetailsResponse> => {
  const { data } = await initBitsoApi({
    url: '/spei/v1/clabes?clabe_type=AUTO_PAYMENT',
    method: 'get',
  })

  return data
}

type CreateCLABEResponse = {
  success: boolean
  payload: {
    clabe: string
    type: string
  }
}

export const createCLABE = async (): Promise<CreateCLABEResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/clabes',
    method: 'post',
  })

  return data
}

export const storeUserCLABE = async ({ clabe, type }: { clabe: string; type: string }): Promise<void> => {
  await axios.post('/api/clabe', { clabe, type })
}

export type GetBalanceResponse = {
  success: boolean
  payload: {
    balances: Array<{
      asset: string
      balance: number
    }>
  }
}

export const getAccountBalance = async (): Promise<GetBalanceResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/balances',
    method: 'get',
  })

  return data
}

export type TestDepositResponse = {
  success: boolean
  payload: {
    amount: string
    trackingCode: string
    trackingKey: string
    senderClabe: string
    senderName: string
    senderCurp: string
    receiverClabe: string
    receiverName: string
    receiverCurp: string
    createdAt: string
  }
}

export const testDeposit = async ({
  amount,
  receiverClabe,
  receiverName,
  senderName,
  senderClabe,
}: {
  amount: number
  receiverClabe: string
  receiverName: string
  senderName: string
  senderClabe: string
}): Promise<TestDepositResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/spei/test/deposits',
    method: 'post',
    payload: {
      amount,
      receiverClabe,
      receiverName,
      senderName,
      senderClabe,
    },
  })

  return data
}

export type getAccountBanksResponse = {
  success: boolean
  payload: Array<{
    id: string
    tag: string
    recipientLegalName: string
    clabe: string
    ownership: string
  }>
}

export const getAccountBanks = async (): Promise<getAccountBanksResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/accounts/banks',
    method: 'get',
  })

  return data
}

export type submitRedemptionResponse = {
  success: boolean
  payload: {
    id: string
    amount: number
    currency: string
    transactionType: string
    summaryStatus: string
    createdAt: string
    updatedAt: string
  }
}

export const submitRedemption = async ({
  amount,
  destinationBankAccountId,
  asset,
}: {
  amount: number
  destinationBankAccountId: string
  asset: string
}): Promise<submitRedemptionResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/accounts/banks',
    method: 'post',
    payload: {
      amount,
      destinationBankAccountId,
      asset,
    },
  })

  return data
}
