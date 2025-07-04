import { getTransactionsList } from '@/utils/bitso'

export async function GET() {
  try {
    const data = await getTransactionsList()

    return Response.json({ success: true, data })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }
}
