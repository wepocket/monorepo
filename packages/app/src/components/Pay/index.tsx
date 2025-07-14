import { FaArrowLeft } from 'react-icons/fa6'
import { ReadQR } from './ReadQR'
import { PaymentForm } from './PaymentForm'
import { useEffect, useState } from 'react'
import { useWindowAction_DEV } from '@/app/hooks/useWindowAction'
import { BalanceTransaction } from '@/generated/prisma'
import { Receipt } from './Receipt'
import { PickRecipient } from './PickRecipient'
import { useNavigationState } from '@/utils/navigationState'

export const PayFactory = (props?: { isQR?: boolean }) => {
  const [flowState, setFlowState] = useState<
    | {
        paymentRecipient?: string
        fundsSent?: BalanceTransaction
      }
    | undefined
  >()
  const [, goBack] = useNavigationState()

  const { setAction } = useWindowAction_DEV()

  useEffect(() => {
    setAction('setFlowState', (state) => {
      setFlowState(state as typeof flowState)
    })
  }, [setAction, setFlowState])

  const handleOnFundsSent = (transaction: BalanceTransaction) => {
    setFlowState((s) => ({ ...s, fundsSent: transaction }))
  }

  return (
    <>
      <div className='flex flex-col flex-1 w-full gap-2.5'>
        <div className='self-stretch px-3.5 py-2.5 bg-white inline-flex justify-start items-center gap-2.5 overflow-hidden w-full'>
          <div className='w-10 h-10 bg-base-p2 rounded-[10px]' />
          <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">Pagar con QR</div>
          <div onClick={() => goBack(0)} className='w-6 h-6 relative overflow-hidden'>
            <FaArrowLeft className='shrink-0 h-5 w-5 text-base-p2' />
          </div>
        </div>
        {!flowState?.paymentRecipient && (
          <>
            {props?.isQR ? (
              <ReadQR setPaymentRecipient={(paymentRecipient: string) => setFlowState({ paymentRecipient })} />
            ) : (
              <PickRecipient setPaymentRecipient={(paymentRecipient: string) => setFlowState({ paymentRecipient })} />
            )}
          </>
        )}
        {flowState?.paymentRecipient && !Boolean(flowState.fundsSent) && (
          <PaymentForm paymentRecipient={flowState.paymentRecipient} onFundsSent={handleOnFundsSent} />
        )}
        {flowState?.paymentRecipient && Boolean(flowState.fundsSent) && (
          <Receipt
            paymentRecipient={flowState.paymentRecipient}
            transaction={flowState.fundsSent as BalanceTransaction}
          />
        )}
      </div>
    </>
  )
}

export const Pay = () => {
  return <PayFactory />
}

export const PayQR = () => {
  return <PayFactory isQR={true} />
}
