import { erc20Abi, Hash, PublicClient, WalletClient } from 'viem'

import { getSigner, getViemProvider } from '../viem'
import { WEPOCKET_CONTROLLER_ABI, WEPOCKET_CONTROLLER_ADDRESS } from './constants'
import { fromReadableAmount } from '../uniswap/conversion'
import { USDT_TOKEN_ARB } from '../uniswap/constants'
import { TransactionState } from '../uniswap/trading'

export async function stakeFunds({
  amountIn: _amountIn,
  client,
  walletClient,
}: {
  amountIn: number
  client?: PublicClient
  walletClient?: WalletClient
}): Promise<TransactionState | Hash> {
  const provider = client || getViemProvider()
  const signer = walletClient || getSigner()

  try {
    const amountIn = fromReadableAmount(_amountIn, USDT_TOKEN_ARB.decimals)

    const { request: requestAllowance } = await provider.simulateContract({
      address: USDT_TOKEN_ARB.address as `0x${string}`,
      account: signer.account,
      abi: erc20Abi,
      args: [WEPOCKET_CONTROLLER_ADDRESS, amountIn],
      functionName: 'approve',
    })

    await signer.writeContract(requestAllowance)

    const { request } = await provider.simulateContract({
      address: WEPOCKET_CONTROLLER_ADDRESS,
      account: signer.account,
      abi: WEPOCKET_CONTROLLER_ABI,
      args: [amountIn],
      functionName: 'stake',
    })

    return await signer.writeContract(request)
  } catch (e) {
    console.error(e)
    return TransactionState.Failed
  }
}
