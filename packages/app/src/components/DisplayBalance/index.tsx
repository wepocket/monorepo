import { MdCallMade, MdOutlineCallReceived } from 'react-icons/md'
import { useFetchBalance } from '@/app/hooks/useFetchBalance'
import { useNavigationState } from '@/utils/navigationState'

export const USDollar = (opts?: { minimumFractionDigits?: number }) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: opts?.minimumFractionDigits || 2,
  })

export const DisplayBalance = () => {
  const [, setScreenId] = useNavigationState()
  const { data } = useFetchBalance()

  const balance = data?.balance

  return (
    <>
      <div className='self-stretch px-2.5 inline-flex flex-col justify-start items-start'>
        <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
          <div className='flex flex-col justify-start items-start gap-[5px]'>
            <div className="w-80 h-3.5 justify-start text-sky-800 text-base font-bold font-['Helvetica']">
              Saldo en cuenta
            </div>
            <div className="w-full h-3.5 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">
              Saldo disponible en tu cuenta
            </div>
          </div>
          <div className='self-stretch inline-flex justify-between items-center'>
            <div className='flex justify-start items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-3xl font-bold font-['Helvetica']">
                {USDollar().format(parseFloat(balance || '0'))}
              </div>
            </div>
            <div className='flex justify-start items-center gap-[5px]'>
              <div className="justify-start text-green-700 text-base font-bold font-['Helvetica']">MXNB</div>
              <div className='w-9 h-9 px-[5px] py-0.5 flex justify-center items-center gap-2.5'>
                <img src='/img/mxnb.svg' alt='MXNB' />
              </div>
            </div>
          </div>
          <div className='self-stretch py-[5px] inline-flex justify-center items-center gap-3.5'>
            <div className='flex-1 px-[5px] py-2.5 bg-base-p2 rounded-[10px] inline-flex flex-col justify-center items-center overflow-hidden'>
              <div className='w-6 h-6 relative overflow-hidden'>
                <MdCallMade className='w-full font-bold' />
              </div>
              <button
                onClick={() => setScreenId(1)}
                className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
                Enviar
              </button>
            </div>
            <div className='flex-1 px-[5px] py-2.5 bg-base-p2 rounded-[10px] inline-flex flex-col justify-center items-center overflow-hidden'>
              <div className='w-6 h-6 relative overflow-hidden'>
                <MdOutlineCallReceived className='w-full font-bold' />
              </div>
              <button
                onClick={() => setScreenId(3)}
                className="text-center justify-start text-fondos-bg2 text-base font-normal font-['Helvetica'] leading-none">
                Recibir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
