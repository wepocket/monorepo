import { useFetchBalance } from '@/app/hooks/useFetchBalance'
import { USDollar } from '../DisplayBalance'
import { useState } from 'react'
import { authenticatePasskey, registerPasskey } from '@/utils/passkey'
import axios from 'axios'
import { useFetchUser } from '@/app/hooks/useFetchUser'

export const PaymentForm = ({ paymentRecipient }: { paymentRecipient: string }) => {
  const [amount, setAmount] = useState<number>(0)
  const { data } = useFetchBalance()
  const balance = data?.balance
  const { data: user } = useFetchUser()

  const handleOnPayment = async () => {
    const { data } = await axios.post('/api/passkey', {
      type: 'challenge',
    })

    if (data.isRegistered === false) {
      const registration = await registerPasskey(user?.username || 'wepocket', data.challenge)

      await axios.post('/api/passkey', {
        type: 'verifyRegistration',
        registration,
      })
    } else {
      const authentication = await authenticatePasskey(data.challenge, data.credential)

      await axios.post('/api/passkey', {
        type: 'verifyAuthentication',
        authentication,
      })
    }
  }

  return (
    <>
      <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-5 overflow-hidden mx-2.5'>
        <div className='flex flex-col justify-start items-start gap-[5px]'>
          <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica'] leading-none">
            Cantidad a pagar
          </div>
        </div>
        <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
          <div className='flex justify-start items-center gap-[5px]'>
            <div className="justify-start text-base-p2 text-3xl font-normal font-['Helvetica'] translate-x-[35px]">
              $
            </div>
            <input
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              className="justify-start text-base-p2 text-3xl font-bold font-['Helvetica'] w-40 pl-8 text-right focus:outline-hidden"
              type='text'
              placeholder='0.00'
            />
          </div>
          <div className='flex justify-start items-center gap-[5px]'>
            <div className="justify-start text-black text-base font-bold font-['Helvetica']">MXN</div>
          </div>
        </div>
        <div className='self-stretch inline-flex justify-center items-start gap-2.5'>
          <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
            <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
              Saldo despues de la transaccion:
            </div>
          </div>
          <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
            <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
              {USDollar.format(parseFloat(balance || '0') - (amount || 0))}
            </div>
          </div>
          <div className='inline-flex flex-col justify-start items-start gap-[5px]'>
            <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">MXN</div>
          </div>
        </div>
      </div>

      <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden mx-2.5'>
        <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica'] leading-none">
          Concepto:
        </div>
        <div className="w-80 h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Para:</div>
        <div className='self-stretch px-5 py-2.5 border-b border-stroke-st2 inline-flex justify-center items-center gap-2.5 overflow-hidden'>
          <div className='w-9 h-9 relative bg-white rounded-[50px] border border-stroke-st1' />
          <div className='inline-flex flex-col justify-center items-start gap-[5px]'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">{paymentRecipient}</div>
            <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Pago con tarjeta</div>
          </div>
        </div>
        <div className="w-80 h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Concepto:</div>
        <div className='self-stretch px-5 py-2.5 border-b border-stroke-st2 inline-flex justify-center items-center gap-2.5 overflow-hidden'>
          <div className='inline-flex flex-col justify-center items-start gap-[5px]'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Comida</div>
            <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Pago con tarjeta</div>
          </div>
        </div>
      </div>

      <div className='mt-20 self-stretch self-stretch px-2.5 inline-flex flex-col justify-center items-center gap-2.5 mx-2.5'>
        <div className='self-stretch px-[5px] py-6 bg-base-p2 rounded-[10px] flex flex-col justify-center items-center overflow-hidden'>
          <div
            onClick={handleOnPayment}
            className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
            Pagar
          </div>
        </div>
        <div className='self-stretch px-[5px] py-6 bg-base-p2 rounded-[10px] flex flex-col justify-center items-center overflow-hidden'>
          <div className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
            Cancelar
          </div>
        </div>
      </div>
    </>
  )
}
