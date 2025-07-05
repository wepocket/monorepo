import { UnstakeFunds, unstakeFunds } from '@/utils/wepocket'
import { useMutation } from '@tanstack/react-query'

export let UN_STAKE_FUNDS_QUERY: string[]

export const useUnStakeFunds = ({ client, walletClient }: UnstakeFunds) => {
  UN_STAKE_FUNDS_QUERY = ['/unStakeFunds', (client?.chain?.id || 0).toString(), walletClient?.account?.address || '']

  const q = useMutation({
    mutationKey: UN_STAKE_FUNDS_QUERY,
    mutationFn: () => unstakeFunds({ client }),
  })

  return q
}
