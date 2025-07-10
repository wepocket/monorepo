import { useFetchDeposits } from '@/app/hooks/useFetchDeposits'
import { useFetchTransactions } from '@/app/hooks/useFetchTransactions'

export type Transaction = {
  from: string
  fromAddress: string
  to: string
  toAddress: string
  amount: string
  type: 'deposit' | 'withdrawal' | 'transfer' | 'payment'
  timestamp: number
}

export const DisplayTransactions = () => {
  const { data } = useFetchDeposits()
  const { data: _data } = useFetchTransactions()

  const transactions = (_data || []).map((transaction) => {
    return {
      from: transaction.sender.username,
      fromAddress: transaction.sender.defaultWallet,
      to: transaction.recipient.username,
      toAddress: transaction.recipient.defaultWallet,
      amount: transaction.amount,
      type: 'transfer',
      timestamp: new Date(transaction.createdAt).getTime(),
    }
  })

  const deposits = (data || []).map((deposit) => {
    return {
      from: deposit.senderClabe,
      fromAddress: deposit.senderClabe,
      to: deposit.receiverClabe,
      toAddress: deposit.receiverClabe,
      amount: deposit.amount,
      type: 'deposit',
      timestamp: new Date(deposit.createdAt).getTime(),
    }
  })

  const txs = [...transactions, ...deposits].sort((a, b) => b.timestamp - a.timestamp)

  return (
    <>
      {txs?.length > 0 &&
        txs.map((deposit) => (
          <p key={deposit.timestamp}>
            {deposit.from} || {deposit.amount} MXN || {deposit.type}
          </p>
        ))}
    </>
  )
}
