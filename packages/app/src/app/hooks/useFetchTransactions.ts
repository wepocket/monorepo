import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type UserTransaction = {
  transactionHash: string
  amount: string
  cashback: number
  state: string
  senderId: string
  recipientId: string
  sender: {
    username: string
    defaultWallet: `0x${string}` | null
  }
  recipient: {
    username: string
    defaultWallet: `0x${string}` | null
  }
  createdAt: string
}

export let USE_FETCH_TRANSACTIONS: string[]

export const useFetchTransactions = () => {
  USE_FETCH_TRANSACTIONS = ['/fetchTransactions']

  const q = useQuery({
    queryKey: USE_FETCH_TRANSACTIONS,
    queryFn: async () => {
      const { data } = await axios.get('/api/transaction')

      return data.data as UserTransaction[]
    },
  })

  return q
}
