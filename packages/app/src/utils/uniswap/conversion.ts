import { formatUnits, parseUnits } from 'viem'

const READABLE_FORM_LEN = 4

export function fromReadableAmount(amount: number, decimals: number): bigint {
  return parseUnits(amount.toString(), decimals)
}

export function toReadableAmount(rawAmount: number, decimals: number): string {
  return formatUnits(BigInt(rawAmount), decimals).slice(0, READABLE_FORM_LEN)
}
