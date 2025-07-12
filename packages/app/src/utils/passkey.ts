import { client } from '@passwordless-id/webauthn'
import { CredentialDescriptor } from '@passwordless-id/webauthn/dist/esm/types'

export const registerPasskey = async (user: string, challenge: string) =>
  await client.register({
    user,
    challenge,
  })

export const authenticatePasskey = async (challenge: string, credential: CredentialDescriptor) =>
  await client.authenticate({
    challenge,
    allowCredentials: [credential],
    timeout: 60000,
  })
