import { useFetchBalance } from '@/app/hooks/useFetchBalance'

export const DisplayBalance = () => {
  const { data } = useFetchBalance()

  const balance = data?.balance

  return <>{balance} MXN</>
}
