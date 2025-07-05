import { cookies } from 'next/headers'
import NextCrypto from 'next-crypto'
import { PrismaClient } from '@/generated/prisma'

const crypto = new NextCrypto('test-encrypt')

export const encrypted = async (v: string) => {
  const r = await crypto.encrypt(v)

  return r
}
export const decrypted = async (v: string) => {
  const r = await crypto.decrypt(v)

  return r
}

export const setUserCookie = async (value: string) => {
  const cookieStore = await cookies()

  cookieStore.set('user', await encrypted(value))
}

export const getUserCookie = async () => {
  const cookieStore = await cookies()

  return (await decrypted(cookieStore.get('user')?.value || '')) as string
}

const prisma = new PrismaClient()

export const isUserAdmin = async () => {
  const userId = await getUserCookie()
  const { isAdmin } = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  })

  return isAdmin
}
