import { createAction } from 'core/utils'

export const save = (data) => {
  const action = {
    key: 'user',
    payload: data
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}

