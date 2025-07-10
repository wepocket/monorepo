import { BalanceTransaction, User } from '@/generated/prisma'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export let USE_FETCH_TRANSACTIONS: string[]

export const useFetchTransactions = () => {
  USE_FETCH_TRANSACTIONS = ['/fetchTransactions']

  const q = useQuery({
    queryKey: USE_FETCH_TRANSACTIONS,
    queryFn: async () => {
      const { data } = await axios.get('/api/transaction')

      return data.data as Array<BalanceTransaction & { sender: User; recipient: User }>
    },
  })

  return q
}
