import { FaArrowLeft } from 'react-icons/fa6'
import { ReadQR } from './ReadQR'
import { PaymentForm } from './PaymentForm'
import { useState } from 'react'

export const Pay = () => {
  const [flowState, setFlowState] = useState<
    | {
        paymentRecipient: string
      }
    | undefined
  >({ paymentRecipient: 'ramiro' })

  return (
    <>
      <div className='flex flex-col flex-1 w-full gap-2.5'>
        <div className='self-stretch px-3.5 py-2.5 bg-white inline-flex justify-start items-center gap-2.5 overflow-hidden w-full'>
          <div className='w-10 h-10 bg-base-p2 rounded-[10px]' />
          <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">Pagar con QR</div>
          <div className='w-6 h-6 relative overflow-hidden'>
            <FaArrowLeft className='shrink-0 h-5 w-5 text-base-p2' />
          </div>
        </div>
        {!flowState?.paymentRecipient && (
          <ReadQR setPaymentRecipient={(paymentRecipient: string) => setFlowState({ paymentRecipient })} />
        )}
        {flowState?.paymentRecipient && <PaymentForm paymentRecipient={flowState.paymentRecipient} />}
      </div>
    </>
  )
}
