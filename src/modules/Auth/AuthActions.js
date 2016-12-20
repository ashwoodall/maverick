import { createAction } from 'core/utils'

const login = (user) => {
  const action = {
    key: 'user',
    endpoint: 'auth/login',
    method: 'POST',
    body: user,
    dataType: {}
  }

 return createAction('CALL_API', action)
}

const register = (user) => {
  const action = {
    key: 'user',
    endpoint: 'auth/register',
    method: 'POST',
    body: user,
    dataType: {}
  }

  return createAction('CALL_API', action)
}

export default { login, register }
