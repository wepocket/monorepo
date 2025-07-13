import { useFetchBalance } from '@/app/hooks/useFetchBalance'
import { USDollar } from '../DisplayBalance'

export const DisplayStaking = () => {
  const { data } = useFetchBalance()

  return (
    <div className='self-stretch px-2.5 inline-flex flex-col justify-start items-start'>
      <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-start items-center gap-2.5 overflow-hidden'>
        <div className='flex flex-col justify-start items-start gap-[5px]'>
          <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica']">
            Cuenta Crecimiento
          </div>
          <div className="w-full h-3.5 justify-start text-Texto-BTO2 text-xs font-normal font-['Helvetica']">
            Saldo disponible en tu cuenta
          </div>
        </div>
        <div className='self-stretch inline-flex justify-start items-start gap-2.5'>
          <div className='flex-1 px-[5px] py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Beneficios generados</div>
            <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">+</div>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">
                {(data?.stakingBalance || 0) > 0 &&
                  USDollar({ minimumFractionDigits: 3 }).format(data?.stakingBalance as unknown as number)}
              </div>
            </div>
          </div>
          <div className='flex-1 px-[5px] py-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-2.5'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Tu APY</div>
            <div className='self-stretch inline-flex justify-center items-center gap-[5px]'>
              <div className="justify-start text-base-p2 text-xl font-bold font-['Helvetica']">13%</div>
            </div>
          </div>
        </div>
        <div className='self-stretch px-[5px] py-2.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 flex flex-col justify-center items-center overflow-hidden'>
          <div className="text-center justify-start text-sky-800 text-base font-bold font-['Helvetica'] leading-none">
            Reclamar beneficios
          </div>
        </div>
      </div>
    </div>
  )
}
