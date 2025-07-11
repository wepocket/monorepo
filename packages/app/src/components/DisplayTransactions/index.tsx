// import { useFetchDeposits } from '@/app/hooks/useFetchDeposits'
import { useFetchTransactions } from '@/app/hooks/useFetchTransactions'
import { TransactionType } from '@/generated/prisma'
import { USDollar } from '../DisplayBalance'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'

export const DisplayTransactions = () => {
  // const { data } = useFetchDeposits()
  const { data: _data } = useFetchTransactions()

  const transactions = (_data || []).map((transaction) => {
    return {
      from: transaction.sender.username,
      to: transaction.recipient.username,
      amount: transaction.amount,
      type: transaction.type,
      isIncome: transaction.isIncome,
      timestamp: new Date(transaction.createdAt).getTime(),
    }
  })

  // const deposits = (data || []).map((deposit) => {
  //   return {
  //     from: deposit.senderClabe,
  //     fromAddress: deposit.senderClabe,
  //     to: deposit.receiverClabe,
  //     toAddress: deposit.receiverClabe,
  //     amount: deposit.amount,
  //     type: 'deposit',
  //     timestamp: new Date(deposit.createdAt).getTime(),
  //   }
  // })

  const txs = [...transactions /* ...deposits */].sort((a, b) => b.timestamp - a.timestamp)

  return (
    <>
      <div className='self-stretch self-stretch px-2.5 inline-flex flex-col justify-start items-start'>
        <div className='self-stretch flex-1 px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
          <div className='self-stretch inline-flex justify-start items-start gap-2.5'>
            <div className="flex-1 justify-start text-base-p2 text-base font-bold font-['Helvetica']">
              Historial de movimientos
            </div>
            <div className="justify-start text-base-p2 text-base font-bold font-['Helvetica']">Ver todo</div>
          </div>
          <div className="w-80 h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
            Saldo disponible en tu cuenta
          </div>
          <div className='self-stretch py-[5px] inline-flex justify-center items-center gap-3.5'>
            <div className='flex-1 px-[5px] py-2.5 bg-base-p2 rounded-[10px] inline-flex flex-col justify-center items-center overflow-hidden'>
              <div className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
                Todo
              </div>
            </div>
            <div className='flex-1 px-[5px] py-2.5 bg-Color-Fondos-BG1 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-center items-center overflow-hidden'>
              <div className="text-center justify-start text-texto-bt02 text-base font-normal font-['Helvetica'] leading-none">
                Pagos
              </div>
            </div>
            <div className='flex-1 px-[5px] py-2.5 bg-Color-Fondos-BG1 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-center items-center overflow-hidden'>
              <div className="text-center justify-start text-texto-bt02 text-base font-normal font-['Helvetica'] leading-none">
                Transfer
              </div>
            </div>
          </div>
          <div className='self-stretch flex-1 relative bg-white overflow-hidden'>
            {txs?.length > 0 &&
              txs.map((deposit) => (
                <div
                  key={deposit.timestamp}
                  className='w-80 px-5 py-2.5 border-b border-stroke-st2 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
                  <div className='w-9 h-9 relative bg-white rounded-[50px] border border-stroke-st1' />
                  <div className='flex-1 inline-flex flex-col justify-center items-start gap-[5px]'>
                    {deposit.type === TransactionType.DEPOSIT ? (
                      <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Deposito</div>
                    ) : (
                      <>
                        <div className="justify-start text-black text-xs font-bold font-['Helvetica']">
                          {deposit.from}
                        </div>
                        <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Pago</div>
                      </>
                    )}
                  </div>
                  <div className="text-right justify-start text-black text-xl font-bold font-['Helvetica']">
                    {USDollar.format(deposit.amount as unknown as number)}
                  </div>
                  <div className='w-6 h-6 px-[5px] flex justify-center items-center gap-2.5 overflow-hidden'>
                    {deposit.isIncome ? (
                      <FaArrowDown className='shrink-0 h-5 w-5 text-green-800' />
                    ) : (
                      <FaArrowUp className='shrink-0 h-5 w-5 text-red-800' />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
