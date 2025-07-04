import { testDeposit } from '@/utils/bitso'

export async function POST(req: Request) {
  const { receiverClabe, receiverName, senderName, amount } = await req.json()

  let data

  try {
    data = await testDeposit({
      receiverName,
      receiverClabe,
      senderName,
      amount,
    })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false })
  }

  return Response.json({ success: true, data })
}
