import { setStakingReceiverAddress, SetStakingReceiverAddress } from '@/utils/wepocket'
import { useMutation } from '@tanstack/react-query'

export let SET_STAKING_RECEIVER_ADDRESS_QUERY: string[]

export const useSetStakingReceiverAddress = ({ address, client, walletClient }: SetStakingReceiverAddress) => {
  SET_STAKING_RECEIVER_ADDRESS_QUERY = [
    '/setStakingReceiverAddress',
    address,
    (client?.chain?.id || 0).toString(),
    walletClient?.account?.address || '',
  ]

  const q = useMutation({
    mutationKey: SET_STAKING_RECEIVER_ADDRESS_QUERY,
    mutationFn: () => setStakingReceiverAddress({ address, client, walletClient }),
  })

  return q
}
