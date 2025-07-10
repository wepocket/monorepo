import { useSendFunds } from '@/app/hooks/useSendFunds'

export const SendFunds = () => {
  const { mutate /* , isPending, data, error */ } = useSendFunds({
    toUsername: 'axnotliztac+113',
    amount: 0.1,
  })

  return (
    <p>
      <button onClick={() => mutate()}>Send</button>
    </p>
  )
}
