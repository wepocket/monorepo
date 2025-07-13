import { useFetchCLABE } from '@/app/hooks/useFetchCLABE'
import { useFetchUser } from '@/app/hooks/useFetchUser'
import { FaArrowLeft, FaRegCopy } from 'react-icons/fa6'

export const ReceiveFunds = () => {
  const { data } = useFetchCLABE()
  const { data: user } = useFetchUser()

  const clabe = (data || [])[0]?.clabe

  return (
    <div className='flex flex-col flex-1 w-full gap-2.5'>
      <div className='self-stretch px-3.5 py-2.5 bg-white inline-flex justify-start items-center gap-2.5 overflow-hidden w-full'>
        <div className='w-10 h-10 bg-base-p2 rounded-[10px]' />
        <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">Pagar con QR</div>
        <div className='w-6 h-6 relative overflow-hidden'>
          <FaArrowLeft className='shrink-0 h-5 w-5 text-base-p2' />
        </div>
      </div>
      <div className='self-stretch px-6 py-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex flex-col justify-start items-center gap-5 overflow-hidden mx-2.5'>
        <div className='flex flex-col justify-start items-start gap-[5px]'>
          <div className="w-80 h-3.5 justify-start text-base-p2 text-base font-bold font-['Helvetica'] leading-none">
            Fondeo por medio de:
          </div>
        </div>
        <div className='w-24 h-8 relative overflow-hidden'>
          <svg xmlns='http://www.w3.org/2000/svg' width='100' height='33' viewBox='0 0 100 33' fill='none'>
            <g clip-path='url(#clip0_142_2475)'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M19.2 9.98146C22.2043 9.82996 25.0584 9.60264 28.0178 9.47223C27.1671 3.28083 24.148 0 15.0179 0C6.05268 0 2.15985 4.56432 1.64568 8.7579C1.06712 13.4771 4.65388 16.4999 10.3884 18.1513C15.3415 19.5887 19.4924 20.5875 19.6217 22.9967C19.7609 25.5876 16.7724 27.0436 15.292 27.0436C12.6463 27.0436 9.76799 24.141 9.42358 21.4806C6.54405 21.7069 3.55489 21.719 0.675354 21.9454C0.675354 29.1723 6.60594 33 14.4693 33C21.8022 33 29.0039 29.946 29.0039 22.1358C29.0039 12.6534 18.6445 12.6563 11.864 10.3209C9.49299 9.02455 10.7294 6.18805 12.961 5.9389C17.4663 5.39728 18.2398 7.93573 19.1999 9.98146H19.2ZM47.4281 0.767938C53.3041 0.767938 57.4647 3.97457 57.4647 10.4749C57.4647 16.4323 53.3251 20.2353 47.3161 20.2353H39.8112V31.643C39.8112 32.4267 39.8112 32.4267 39.1123 32.4267H31.2823C30.302 32.4267 30.302 32.4267 30.302 31.6975V2.12228C30.302 0.767938 30.302 0.767938 31.678 0.767938H47.4281ZM40.5659 14.2072C40.0108 14.2072 39.8112 13.9815 39.8112 13.6402V7.512C39.8112 7.06257 40.1815 6.81007 40.5199 6.81007H43.8096C46.6412 7.22388 47.6777 8.74338 47.6777 10.7246C47.6777 13.5593 45.1262 14.2072 42.9101 14.2072H40.5658H40.5659Z'
                fill='#343084'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M59.6018 1.64346C59.6018 1.2464 59.8896 0.942528 60.2068 0.942528H85.1658C85.7166 0.917836 85.7766 1.14217 85.7766 1.35448V7.0034C85.8023 7.26558 85.5844 7.38544 85.3908 7.38544H69.5866C69.2563 7.38544 69.1471 7.72071 69.1471 8.08699V11.9011C69.1471 12.3125 69.4433 12.6885 69.9422 12.6885H83.9259L84.245 13.0046V18.3012C84.0851 18.5284 83.9253 18.7555 83.7654 18.9828H69.674C69.3481 18.9828 69.147 19.1821 69.147 19.5048V24.5858C69.147 24.866 69.4841 25.1779 69.8783 25.1779H85.4575C85.6635 25.1779 85.7765 25.3721 85.7765 25.4938V31.6649C85.7765 31.8101 85.6107 31.9686 85.4698 31.9686H59.8566C59.7208 31.9686 59.6018 31.8359 59.6018 31.7163V1.64359V1.64346Z'
                fill='#FF9400'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M99.3245 18.4433V31.9686H90.437C90.3012 31.9686 90.1821 31.8359 90.1821 31.7163V19.6332C90.1821 19.3096 90.4079 19.1234 90.5765 19.1234H93.1281C93.3838 19.1234 93.4484 19.34 93.4484 19.5312V25.1779C93.4484 25.8913 94.0523 25.5839 94.3753 25.1779C96.0251 22.9331 97.6749 20.6882 99.3246 18.4433H99.3245Z'
                fill='#343084'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M89.7936 1.64345C89.7936 1.24639 90.0814 0.94252 90.3986 0.94252H98.5567C99.1219 0.94252 99.3245 1.28523 99.3245 1.55573V13.105L94.3294 6.18197C94.2215 6.0322 93.9747 6.04188 93.9747 6.35196V11.3382C93.9747 11.6159 93.8361 12.1427 93.4369 12.1427H90.1817C90.0043 12.1427 89.7932 11.7463 89.7932 11.5194V1.64345H89.7936Z'
                fill='#FF9400'
              />
            </g>
            <defs>
              <clipPath id='clip0_142_2475'>
                <rect width='100' height='33' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='self-stretch p-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
          <div className='flex-1 inline-flex flex-col justify-center items-start gap-[5px]'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Beneficiario</div>
            <div className="justify-start text-black text-base font-normal font-['Helvetica']">
              {user?.name || user?.username}
            </div>
          </div>
          <div className='w-9 h-9 px-[5px] flex justify-center items-center gap-2.5 overflow-hidden'>
            <FaRegCopy />
          </div>
        </div>
        <div className='self-stretch p-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
          <div className='flex-1 inline-flex flex-col justify-center items-start gap-[5px]'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">CLABE</div>
            <div className="justify-start text-black text-base font-normal font-['Helvetica']">{clabe}</div>
          </div>
          <div className='w-9 h-9 px-[5px] flex justify-center items-center gap-2.5 overflow-hidden'>
            <FaRegCopy />
          </div>
        </div>
        <div className='self-stretch p-3.5 bg-fondos-bg2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stroke-st2 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
          <div className='flex-1 inline-flex flex-col justify-center items-start gap-[5px]'>
            <div className="justify-start text-black text-xs font-bold font-['Helvetica']">Banco</div>
            <div className="justify-start text-black text-base font-normal font-['Helvetica']">STP</div>
          </div>
          <div className='w-9 h-9 px-[5px] flex justify-center items-center gap-2.5 overflow-hidden'>
            <FaRegCopy />
          </div>
        </div>
        <div className='self-stretch inline-flex justify-start items-center gap-[5px]'>
          <div className="flex-1 justify-start text-texto-bt02 text-xs font-normal font-['Helvetica']">Comisión:</div>
          <div className="text-right justify-start text-texto-bt02 text-xs font-bold font-['Helvetica']">$0</div>
        </div>
      </div>

      <div className='self-stretch px-6 py-2.5 bg-sky-800 rounded-[10px] inline-flex justify-start items-center gap-3.5 mx-2.5'>
        <div className='w-9 h-9 relative rounded-[50px] border border-texto-bt01' />
        <div className='flex-1 inline-flex flex-col justify-start items-start gap-2.5'>
          <div className="justify-start text-texto-bt01 text-xs font-bold font-['Helvetica']">
            ¿Vas a recibir dinero de otras personas?
          </div>
          <div className="self-stretch justify-start text-texto-bt03 text-xs font-normal font-['Helvetica']">
            Recuerda que si el dinero que vas a recibir mediante este metodo es enviado desde una cuenta que no esta a
            tu nombre, solo podras transaccionar con el despues de 24 hrs.
          </div>
        </div>
      </div>
    </div>
  )
}
