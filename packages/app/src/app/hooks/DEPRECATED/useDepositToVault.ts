import { depositToVault, StakeFunds } from '@/utils/wepocket'
import { useMutation } from '@tanstack/react-query'

export let DEPOSIT_TO_VAULT: string[]

export const useDepositToVault = ({ amountIn, client, walletClient }: StakeFunds) => {
  DEPOSIT_TO_VAULT = [
    '/depositToVault',
    amountIn.toString(),
    (client?.chain?.id || 0).toString(),
    walletClient?.account?.address || '',
  ]

  const q = useMutation({
    mutationKey: DEPOSIT_TO_VAULT,
    mutationFn: () => depositToVault({ amountIn, client }),
  })

  return q
}
