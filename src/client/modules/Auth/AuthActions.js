import cookie from 'react-cookie'

import { createAction } from 'core/utils'
import { actionTypes } from 'core/constants'

export const login = (user) => {
  const action = {
    key: 'user',
    endpoint: 'login',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action)).then(
      response => {
        cookie.save('username', response.payload.email)
    })
  }
}

export const register = (user) => {
  const action = {
    key: 'user',
    endpoint: 'register',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action)).then(
      response => { console.log(response) }
    )
  }
}
