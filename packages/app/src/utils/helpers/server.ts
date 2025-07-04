import { cookies } from 'next/headers'

export const setUserCookie = async (value: string) => {
  const cookieStore = await cookies()

  cookieStore.set('user', value)
}

export const getUserCookie = async () => {
  const cookieStore = await cookies()

  return cookieStore.get('user')?.value
}
