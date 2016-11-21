import { createAction } from 'core/utils'

export const getUsersByStation = () => {
  const action = {
    key: 'people',
    endpoint: 'users/forthood',
    method: 'get',
    dataType: []
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

