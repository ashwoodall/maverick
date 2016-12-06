import { createAction } from 'core/utils'

export const updateUser = (user) => {
  const action = {
    key: 'user',
    endpoint: `user`,
    method: 'PUT',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

