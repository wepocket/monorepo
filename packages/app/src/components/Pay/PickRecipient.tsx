import { useUserLookup } from '@/app/hooks/useUserLookup'
import React from 'react'

export const PickRecipient = ({ setPaymentRecipient }: { setPaymentRecipient: (paymentRecipient: string) => void }) => {
  const { data } = useUserLookup()
  const onPickRecipient = (paymentRecipient: string) => {
    setPaymentRecipient(paymentRecipient)
  }

  return (
    <div className='self-stretch self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
      <div className='self-stretch inline-flex justify-start items-start gap-2.5'>
        <div className="flex-1 justify-start text-base-p2 text-base font-bold font-['Helvetica']">Cuentas Wepocket</div>
      </div>
      <div className='self-stretch px-2.5 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-center items-start overflow-hidden'>
        <div className="text-center justify-start text-texto-bt03 text-base font-normal font-['Helvetica'] leading-none">
          Buscar por Usuario
        </div>
      </div>
      <div className='self-stretch flex-1 relative bg-white overflow-hidden'>
        {data?.map((item, key) => (
          <button
            onClick={() => onPickRecipient(item.username)}
            key={key}
            className='inline-flex flex-col justify-start items-start gap-2.5'>
            <div className='w-80 py-2.5 border-b border-stroke-st2 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
              <div className='w-9 h-9 relative bg-white rounded-[50px] border border-stroke-st1' />
              <div className='flex-1 inline-flex flex-col justify-center items-start gap-[5px]'>
                <div className="justify-start text-black text-xs font-bold font-['Helvetica']">{item.username}</div>
                <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">{item.email}</div>
              </div>
              <div className='w-6 h-6 px-[5px]' />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
