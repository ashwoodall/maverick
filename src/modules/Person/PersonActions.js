import { createAction } from 'core/utils'

export const getUserById = (id) => {
  const action = {
    key: 'person',
    endpoint: `user/${id}`,
    method: 'GET',
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

