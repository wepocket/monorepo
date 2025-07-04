import { NextResponse } from 'next/server'
import { getUserCookie } from './utils/helpers/server'

export async function middleware(req: Request) {
  const reqUrl = req.url

  const userCookie = await getUserCookie()

  if (reqUrl.includes('/api/') && !userCookie) {
    return NextResponse.json(
      {
        success: false,
        message: 'something went wrong',
      },
      { status: 500 }
    )
  }

  return NextResponse.next()
}
