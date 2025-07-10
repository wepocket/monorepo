import { useFetchBalance } from '@/app/hooks/useFetchBalance'

export const DisplayBalance = () => {
  const { data } = useFetchBalance()

  const balance = data?.balances?.[0]

  return <>{balance?.available} MXN</>
}
