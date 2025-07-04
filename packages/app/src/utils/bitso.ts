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
    .createHmac('sha256', process.env.BITSO_SECRET_KEY as string)
    .update(`${nonce}${httpMethod}${url}${payloadString}`)
    .digest('hex')
  const authHeader = `${process.env.BITSO_API_KEY}:${nonce}:${signature}`

  const bitsoApi = applyCaseMiddleware(
    axios.create({
      baseURL: BITSO_API_HOST,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bitso ${authHeader}`,
      },
    })
  ) as AxiosInstance

  const { data } = await bitsoApi[method](url, payloadString || undefined)

  return { data }
}

export type AccountDetailsResponse = {
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

export const getAccountDetails = async (): Promise<AccountDetailsResponse> => {
  const { data } = await initBitsoApi({
    url: '/spei/v1/clabes?clabe_type=AUTO_PAYMENT',
    method: 'get',
  })

  return data.payload
}

type CreateCLABEResponse = {
  clabe: string
  type: string
}

export const createCLABE = async (): Promise<CreateCLABEResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/clabes',
    method: 'post',
  })

  return data.payload
}

export const storeUserCLABE = async ({ clabe, type }: { clabe: string; type: string }): Promise<void> => {
  await axios.post('/api/clabe', { clabe, type })
}

export type GetBalanceResponse = {
  balances: Array<{
    asset: string
    balance: number
  }>
}

export const getAccountBalance = async (): Promise<GetBalanceResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/balances',
    method: 'get',
  })

  return data.payload
}

export type TestDepositResponse = {
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

export const testDeposit = async ({
  amount,
  receiverClabe,
  receiverName,
  senderName,
}: {
  amount: number
  receiverClabe: string
  receiverName: string
  senderName: string
}): Promise<TestDepositResponse> => {
  const { data } = await initBitsoApi({
    url: '/spei/test/deposits',
    method: 'post',
    payload: {
      amount,
      receiver_clabe: receiverClabe,
      receiver_name: receiverName,
      sender_name: senderName,
    },
  })

  return data.payload
}

export type getAccountBanksResponse = Array<{
  id: string
  tag: string
  recipientLegalName: string
  clabe: string
  ownership: string
}>

export const getAccountBanks = async (): Promise<getAccountBanksResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/accounts/banks',
    method: 'get',
  })

  return data.payload
}

export type submitRedemptionResponse = {
  id: string
  amount: number
  currency: string
  transactionType: string
  summaryStatus: string
  createdAt: string
  updatedAt: string
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
      destination_bank_account_id: destinationBankAccountId,
      asset,
    },
  })

  return data.payload
}

export type GetTransactionsListResponse = {
  content: Array<{
    id: string
    amount: number
    currency: string
    transaction_type: string
    summary_status: string
    created_at: string
    updated_at: string
  }>
  pageable: {
    page_number: number
    page_size: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
  }
  last: boolean
  total_pages: number
  total_elements: number
  size: number
  number: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  first: boolean
  number_of_elements: number
  empty: boolean
}

export const getTransactionsList = async (): Promise<GetTransactionsListResponse> => {
  const { data } = await initBitsoApi({
    url: '/mint_platform/v1/transactions',
    method: 'get',
  })

  return data.payload
}
