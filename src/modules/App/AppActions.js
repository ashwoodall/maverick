import { createAction } from 'core/utils'

export const getUserByToken = () => {
  const action = {
    key: 'user',
    endpoint: 'user/by/token',
    method: 'GET',
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
      .then(response => {
        let userAction = {
          key: 'user',
          endpoint: `user/${response.payload.data.id}`,
          method: 'GET',
          dataType: {}
        }

        dispatch(createAction('CALL_API', userAction))
      })
  }
}
