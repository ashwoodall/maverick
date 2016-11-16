import { createAction } from 'core/utils'

export const setActive = (active) => {
  const action = {
    key: 'navigation',
    payload: {
      active: active
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}
