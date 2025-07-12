import { useFetchUser } from '@/app/hooks/useFetchUser'
import { DisplayBalance } from '../DisplayBalance'
import { DisplayTransactions } from '../DisplayTransactions'
import { DisplayStaking } from '../DisplayStaking'

const HomeHeader = () => {
  const { data } = useFetchUser()

  return (
    <div className='w-full self-stretch px-3.5 py-2.5 inline-flex justify-start items-center gap-2.5 overflow-hidden'>
      <img className='w-10 h-10 rounded-[77px]' src='https://placehold.co/40x40' />
      <div className="flex-1 justify-start text-black text-base font-bold font-['Helvetica']">
        Hola {data?.username}!
      </div>
      <div className='flex justify-end items-end'>
        <div className='w-5 h-5 bg-blue-600 rounded-full border border-black' />
        <div className='w-9 h-9 bg-white rounded-full border border-stroke-st2' />
      </div>
    </div>
  )
}

export const Home = () => {
  return (
    <div className='self-stretch px-2.5 inline-flex flex-col justify-start items-start gap-2.5'>
      <HomeHeader />
      <DisplayBalance />
      <DisplayStaking />
      <DisplayTransactions />
    </div>
  )
}
