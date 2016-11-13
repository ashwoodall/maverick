import { createAction } from 'core/utils'

export const updateUser = (id, user) => {
  const action = {
    key: 'user',
    endpoint: `user/${id}`,
    method: 'PUT',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

