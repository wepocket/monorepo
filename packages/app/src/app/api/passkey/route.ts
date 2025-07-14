import { PrismaClient } from '@/generated/prisma'
import { getUserCookie } from '@/utils/helpers/server'
import { server } from '@passwordless-id/webauthn'
import { CredentialInfo } from '@passwordless-id/webauthn/dist/esm/types'

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
  const { type, registration, authentication } = await req.json()

  const userId = await getUserCookie()
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
      isRegistered: Boolean(credentialExists),
      credential: credentialExists?.credential && JSON.parse(credentialExists?.credential as string),
    })
  }

  if (type === 'verifyRegistration') {
    const expected = {
      challenge: credentialExists?.challenge || '',
      origin: process.env.APP_HOST || 'http://localhost:3000',
    }
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
      origin: process.env.APP_HOST || 'http://localhost:3000',
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
}
