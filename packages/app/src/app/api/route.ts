import { getAccountBanks } from '@/utils/bitso'
import { AxiosError } from 'axios'

export async function GET() {
  let r

  try {
    r = await getAccountBanks()
  } catch (_e) {
    console.log(((_e as AxiosError).toJSON() as { message: string }).message)
  }

  return Response.json({ data: r })
}
