type ActionTypeFn = (...args: unknown[]) => void

export const useWindowAction_DEV = () => {
  const setAction = (actionName: string, action: ActionTypeFn) => {
    const _window = window as unknown as { windowActions: { [key: string]: ActionTypeFn } }

    if (!_window.windowActions) {
      _window.windowActions = {}
    }

    _window.windowActions[actionName] = action

    console.log('AVAILABLE_WINDOW_ACTION:::', `window.windowActions.${actionName}`)
  }

  return {
    setAction,
  }
}
