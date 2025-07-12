import _QrReader from 'react-qr-reader'
import { FaArrowLeft } from 'react-icons/fa6'
import React from 'react'

const QrReader = _QrReader as unknown as React.FC<QrReader.props>

export const ReadQR = () => {
  const handleScan = (data: unknown) => {
    if (data) {
      console.log(data)
    }
  }

  const handleError = (_data: unknown) => {
    console.log(_data)
  }

  return (
    <div className='flex flex-col flex-1 w-full'>
      <div className='self-stretch px-3.5 py-2.5 bg-white inline-flex justify-start items-center gap-2.5 overflow-hidden w-full'>
        <div className='w-10 h-10 bg-base-p2 rounded-[10px]' />
        <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">Pagar con QR</div>
        <div className='w-6 h-6 relative overflow-hidden'>
          <FaArrowLeft className='shrink-0 h-5 w-5 text-base-p2' />
        </div>
      </div>
      <div className='flex flex-col flex-1 grow justify-center items-center bg-black'>
        <div className='w-80 h-80 rounded-[50px] border-[5px] border-white overflow-hidden'>
          <QrReader onError={handleError} onScan={handleScan} style={{ width: '100%' }} facingMode='environment' />
        </div>
      </div>
    </div>
  )
}
