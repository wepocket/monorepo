import React from 'react'
import _QrReader from 'react-qr-reader'

const QrReader = _QrReader as unknown as React.FC<QrReader.props>

export const ReadQR = ({ setPaymentRecipient }: { setPaymentRecipient: (paymentRecipient: string) => void }) => {
  const handleScan = (data: unknown) => {
    if (data) {
      setPaymentRecipient(data as string)
    }
  }

  const handleError = (_data: unknown) => {
    console.log(_data)
  }

  return (
    <div className='flex flex-col flex-1 grow justify-center items-center bg-black'>
      <div className='w-80 h-80 rounded-[50px] border-[5px] border-white overflow-hidden'>
        <QrReader onError={handleError} onScan={handleScan} style={{ width: '100%' }} facingMode='environment' />
      </div>
    </div>
  )
}
