import { useSendFunds } from '@/app/hooks/useSendFunds'

export const SendFunds = () => {
  const { mutate /* , isPending, data, error */ } = useSendFunds({
    toUsername: 'axnotliztac113',
    amount: 10,
  })

  return (
    <p>
      <button onClick={() => mutate()}>Send</button>
    </p>
  )
}
