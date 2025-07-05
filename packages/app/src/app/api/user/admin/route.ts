import { getAccountDetails } from '@/utils/bitso'
import { isUserAdmin } from '@/utils/helpers/server'

export async function GET() {
  try {
    const isAdmin = await isUserAdmin()

    if (isAdmin) {
      const data = await getAccountDetails()

      return Response.json({ success: true, data })
    } else {
      return Response.json({ success: false }, { status: 401 })
    }
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}
