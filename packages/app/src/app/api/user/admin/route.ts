import { getAccountDetails } from '@/utils/bitso'

export async function GET() {
  let data

  try {
    data = await getAccountDetails()
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true, data })
}
