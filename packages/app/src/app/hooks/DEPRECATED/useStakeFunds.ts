import { StakeFunds, stakeFunds } from '@/utils/wepocket'
import { useMutation } from '@tanstack/react-query'

export let STAKE_FUNDS_QUERY: string[]

export const useStakeFunds = ({ amountIn, client, walletClient }: StakeFunds) => {
  STAKE_FUNDS_QUERY = [
    '/stakeFunds',
    amountIn.toString(),
    (client?.chain?.id || 0).toString(),
    walletClient?.account?.address || '',
  ]

  const q = useMutation({
    mutationKey: STAKE_FUNDS_QUERY,
    mutationFn: () => stakeFunds({ amountIn, client }),
  })

  return q
}
