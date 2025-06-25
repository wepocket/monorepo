import { erc20Abi, Hash, parseAbi, PublicClient, WalletClient } from 'viem'

import { getSigner, getViemProvider } from '../viem'
import { isDevEnv, StakingType, WEPOCKET_CONTROLLER_ABI, WEPOCKET_CONTROLLER_ADDRESS } from './constants'
import { fromReadableAmount, toReadableAmount } from '../uniswap/conversion'
import { USDT_TOKEN_ARB, USDC_TOKEN_ARB, WETH_TOKEN_LOCAL } from '../uniswap/constants'
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

  const token = isDevEnv ? WETH_TOKEN_LOCAL : USDT_TOKEN_ARB

  try {
    if (isDevEnv) {
      const amountIn = fromReadableAmount(_amountIn, token.decimals)

      const { request } = await provider.simulateContract({
        address: token.address as `0x${string}`,
        account: signer.account,
        abi: isDevEnv ? parseAbi(['function deposit() public payable']) : erc20Abi,
        value: amountIn,
        functionName: 'deposit',
      })

      await signer.writeContract(request)
    }

    const amountIn = fromReadableAmount(_amountIn, token.decimals)

    const { request: requestAllowance } = await provider.simulateContract({
      address: token.address as `0x${string}`,
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
      functionName: isDevEnv ? 'stakeNative' : 'stakeStables',
    })

    return await signer.writeContract(request)
  } catch (e) {
    console.error(e)
    return TransactionState.Failed
  }
}

export type StakingStatus = {
  isUserStaking: boolean
  stakingType: StakingType
  stakingBalance: number | string
}

export const getUserStakingState = async ({ address, client }: { address: `0x${string}`; client?: PublicClient }) => {
  const provider = client || getViemProvider()

  const r = await provider.readContract({
    address: WEPOCKET_CONTROLLER_ADDRESS,
    abi: WEPOCKET_CONTROLLER_ABI,
    functionName: 'isUserStaking',
    args: [address],
  })

  const [isUserStaking, stakingType, stakingBalance] = r as [boolean, StakingType, bigint]

  return {
    isUserStaking,
    stakingType,
    stakingBalance: toReadableAmount(Number(stakingBalance), USDC_TOKEN_ARB.decimals),
  } as StakingStatus
}

export const unstakeFunds = async ({
  client,
  walletClient,
}: {
  client?: PublicClient
  walletClient?: WalletClient
}): Promise<TransactionState | Hash> => {
  const provider = client || getViemProvider()
  const signer = walletClient || getSigner()

  const { request } = await provider.simulateContract({
    address: WEPOCKET_CONTROLLER_ADDRESS,
    account: signer.account,
    abi: WEPOCKET_CONTROLLER_ABI,
    functionName: 'unstake',
  })

  return await signer.writeContract(request)
}
