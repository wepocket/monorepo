import { getAccountDetails } from '@/utils/bitso'

export async function GET() {
  try {
    await getAccountDetails()
  } catch (_e) {
    console.log((_e as Date).toJSON())
  }

  return Response.json({ data: 'Hello World!' })
}
