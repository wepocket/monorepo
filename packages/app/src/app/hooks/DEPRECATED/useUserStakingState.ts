import { getUserStakingState, UserStakingState } from '@/utils/wepocket'
import { useQuery } from '@tanstack/react-query'

export let USER_STAKING_STATE_QUERY: string[]

export const useUserStakingState = ({ address, client }: UserStakingState) => {
  USER_STAKING_STATE_QUERY = ['/userStakingState', address, (client?.chain?.id || 0).toString()]

  const q = useQuery({
    queryKey: USER_STAKING_STATE_QUERY,
    queryFn: () => getUserStakingState({ address, client }),
    enabled: Boolean(address && client),
  })

  return q
}
