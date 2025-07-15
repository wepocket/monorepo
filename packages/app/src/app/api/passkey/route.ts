import { PrismaClient } from '@/generated/prisma'
import { getUserCookie } from '@/utils/helpers/server'
import { server } from '@passwordless-id/webauthn'
import { CredentialInfo } from '@passwordless-id/webauthn/dist/esm/types'

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
  const { type, registration, authentication } = await req.json()
  // const url = new URL(req.url)

  const userId = await getUserCookie()

  try {
    const credentialExists = await prisma.passkey.findUnique({
      where: {
        userId,
      },
    })

    if (type === 'challenge') {
      const challenge = server.randomChallenge()

      if (Boolean(credentialExists)) {
        await prisma.passkey.update({
          where: {
            userId,
          },
          data: {
            challenge,
          },
        })
      } else {
        await prisma.passkey.create({
          data: {
            challenge,
            userId,
          },
        })
      }

      return Response.json({
        success: true,
        challenge,
        credential: credentialExists?.credential && JSON.parse(credentialExists?.credential as string),
      })
    }

    if (type === 'verifyRegistration') {
      const expected = {
        challenge: credentialExists?.challenge || '',
        // origin: url.origin || process.env.APP_HOST || '',
        origin: 'https://main.d2caz6qi7yvwc6.amplifyapp.com',
      }

      console.log('PASSKEY:::', expected)
      const registrationParsed = await server.verifyRegistration(registration, expected)

      await prisma.passkey.update({
        where: {
          userId,
        },
        data: {
          credential: JSON.stringify(registrationParsed.credential),
        },
      })

      return Response.json({
        success: true,
        registrationParsed,
      })
    }

    if (type === 'verifyAuthentication') {
      const expected = {
        challenge: credentialExists?.challenge || '',
        // origin: url.origin || process.env.APP_HOST || '',
        origin: 'https://main.d2caz6qi7yvwc6.amplifyapp.com',
        userVerified: true,
        counter: -1,
      }

      const verified = await server.verifyAuthentication(
        authentication,
        JSON.parse(credentialExists?.credential as string) as unknown as CredentialInfo,
        expected
      )

      return Response.json({
        success: true,
        verified,
      })
    }
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }
}

export const GET = async () => {
  console.log(await prisma.passkey.findMany())

  return Response.json({ success: true })
}

export const DELETE = async () => {
  try {
    const userId = await getUserCookie()

    await prisma.passkey.delete({
      where: {
        userId,
      },
    })
  } catch (_e) {
    const e = _e as Error

    console.log(e.message)

    return Response.json({ success: false }, { status: 500 })
  }

  return Response.json({ success: true })
}
