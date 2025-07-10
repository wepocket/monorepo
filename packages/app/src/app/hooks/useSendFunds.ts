import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export let USE_SEND_FUNDS: string[]

export const useSendFunds = ({
  toId,
  toUsername,
  amount,
  mockWallet = true,
}: {
  toId?: string
  toUsername?: string
  amount: number
  mockWallet?: boolean
}) => {
  USE_SEND_FUNDS = ['/sendFunds', toId || '', toUsername || '', amount.toString(), mockWallet + '']

  const q = useMutation({
    mutationKey: USE_SEND_FUNDS,
    mutationFn: async () => {
      const { data } = await axios.post('/api/send', {
        toId,
        toUsername,
        amount,
        mockWallet,
      })

      return data as { success: boolean; data: { transactionHash: string } }
    },
  })

  return q
}
