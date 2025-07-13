import { hookstate, useHookstate } from '@hookstate/core'

const globalState = hookstate({ screenId: 0 })

export const useNavigationState = () => {
  const { screenId: _screenId } = useHookstate(globalState)
  const screenId = _screenId.get()
  const setScreenId = (v: number) => _screenId.set(v)

  return [screenId, setScreenId] as const
}
