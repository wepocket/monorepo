import { BalanceTransaction } from '@/generated/prisma'
import { USDollar } from '../DisplayBalance'
import { FaCheck } from 'react-icons/fa6'

export const Receipt = ({
  paymentRecipient,
  transaction,
}: {
  paymentRecipient: string
  transaction: BalanceTransaction
}) => {
  return (
    <>
      <div className='self-stretch self-stretch p-6 bg-base-s1 inline-flex flex-col justify-start items-start gap-2.5'>
        <div className='self-stretch flex flex-col justify-start items-center'>
          <div className='w-16 h-16 px-[5px] py-2.5 bg-base-s1 rounded-[10px] outline outline-[5px] outline-offset-[-2.50px] outline-base-s4 flex flex-col justify-center items-center overflow-hidden z-[1]'>
            <div className='w-6 h-6 relative overflow-hidden flex justify-center items-center'>
              <FaCheck size={30} />
            </div>
          </div>
          <div className='self-stretch px-6 pt-7 pb-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-Stroke-ST2 flex flex-col justify-start items-center gap-5 overflow-hidden -mt-6'>
            <div className='flex flex-col justify-start items-start gap-[5px]'>
              <div className="justify-start text-base-p2 text-base font-bold font-['Helvetica'] leading-none">
                Transaccion exitosa!
              </div>
            </div>
            <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
              <div className='w-28 flex justify-start items-center gap-[5px]'>
                <div className="justify-start text-base-p2 text-3xl font-bold font-['Helvetica']">Gracias</div>
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-Stroke-ST2 flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
          <div className='self-stretch flex flex-col justify-start items-start gap-[5px]'>
            <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica'] leading-none">
              Recibo de transacción
            </div>
          </div>
          <div className='self-stretch inline-flex justify-start items-center gap-[5px]'>
            <div className="flex-1 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
              Numero de transacción
            </div>
            <div className="text-right justify-start text-texto-bt02 text-xs font-bold font-['Helvetica']">
              67845321
            </div>
          </div>
          <div className="self-stretch h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
            Cantidad pagada:
          </div>
          <div className='self-stretch py-2.5 inline-flex justify-center items-center gap-[5px]'>
            <div className='flex justify-start items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-3xl font-bold font-['Helvetica']">
                {USDollar().format(transaction.amount as unknown as number)}
              </div>
            </div>
            <div className='flex justify-start items-center gap-[5px]'>
              <div className="justify-start text-black text-base font-bold font-['Helvetica']">MXN</div>
            </div>
          </div>
          <div className='self-stretch inline-flex justify-start items-start gap-3.5'>
            <div className='flex-1 inline-flex flex-col justify-start items-start gap-3.5'>
              <div className='self-stretch inline-flex justify-start items-center gap-[5px]'>
                <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Fecha</div>
              </div>
              <div className='inline-flex justify-start items-center gap-[5px]'>
                <div className="justify-start text-stroke-st1 text-base font-normal font-['Helvetica']">
                  {new Date(transaction.createdAt).toDateString()}
                </div>
              </div>
            </div>
            <div className='inline-flex flex-col justify-start items-start gap-3.5'>
              <div className='self-stretch inline-flex justify-start items-center gap-[5px]'>
                <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Hora:</div>
              </div>
              <div className='inline-flex justify-start items-center gap-[5px]'>
                <div className="justify-start text-stroke-st1 text-base font-normal font-['Helvetica']">
                  {new Date(transaction.createdAt).toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
            Para:
          </div>
          <div className='self-stretch px-5 py-2.5 border-b border-Stroke-ST2 inline-flex justify-center items-center gap-2.5 overflow-hidden'>
            <div className='w-9 h-9 relative bg-white rounded-[50px] border border-stroke-st1' />
            <div className='inline-flex flex-col justify-center items-start gap-[5px]'>
              <div className="justify-start text-black text-xs font-bold font-['Helvetica']">{paymentRecipient}</div>
              <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
                Pago con tarjeta
              </div>
            </div>
          </div>
          <div className="self-stretch h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
            Concepto:
          </div>
          <div className='self-stretch px-5 py-2.5 border-b border-Stroke-ST2 inline-flex justify-center items-center gap-2.5 overflow-hidden'>
            <div className='inline-flex flex-col justify-center items-start gap-[5px]'>
              <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Comida</div>
              <div className="justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
                Pago con tarjeta
              </div>
            </div>
          </div>
        </div>
        <div className='self-stretch flex-1 px-2.5 inline-flex justify-center items-center gap-2.5'>
          <div className='flex-1 px-[5px] py-2.5 bg-base-p2 rounded-[10px] inline-flex flex-col justify-center items-center overflow-hidden'>
            <div className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
              Inicio
            </div>
          </div>
          <div className='flex-1 px-[5px] py-2.5 bg-base-p2 rounded-[10px] inline-flex flex-col justify-center items-center overflow-hidden'>
            <div className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
              Compartir
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
