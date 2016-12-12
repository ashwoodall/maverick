import { createAction } from 'core/utils'
import { browserHistory } from 'react-router'

export const login = (user) => {
  const action = {
    key: 'user',
    endpoint: 'auth/login',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
      .then(response => {
        sessionStorage.setItem('jwt', response.payload.token)
        browserHistory.push('/')
      })
  }
}

export const register = (user) => {
  const action = {
    key: 'register',
    endpoint: 'auth/register',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}
