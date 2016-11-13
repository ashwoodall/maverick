import { browserHistory } from 'react-router'

import { createAction } from 'core/utils'
import { actionTypes } from 'core/constants'

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
        browserHistory.push('/profile')
      })
  }
}

export const register = (user) => {
  const action = {
    key: 'user',
    payload: {
      emai: user.email
    }
  }

  const apiAction = {
    key: 'user',
    endpoint: 'auth/register',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
    dispatch(createAction('CALL_API', apiAction))
  }
}
