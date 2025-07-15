import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { authenticatePasskey, registerPasskey } from '@/utils/passkey'
import { useFetchUser } from './useFetchUser'
import { BalanceTransaction } from '@/generated/prisma'

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
  const { data: user } = useFetchUser()

  USE_SEND_FUNDS = ['/sendFunds', toId || '', toUsername || '', amount.toString(), mockWallet + '']

  const q = useMutation({
    mutationKey: USE_SEND_FUNDS,
    mutationFn: async () => {
      const { data } = await axios.post('/api/passkey', {
        type: 'challenge',
      })

      if (!data.credential) {
        const registration = await registerPasskey(user?.username || 'wepocket', data.challenge)

        await axios.post('/api/passkey', {
          type: 'verifyRegistration',
          registration,
        })
      } else {
        const authentication = await authenticatePasskey(data.challenge, data.credential)

        await axios.post('/api/passkey', {
          type: 'verifyAuthentication',
          authentication,
        })
      }

      const { data: sendResultData } = await axios.post('/api/send', {
        toId,
        toUsername,
        amount,
        // mockWallet,
      })

      return sendResultData.transaction as BalanceTransaction
    },
  })

  return q
}
