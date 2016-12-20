import { createAction } from 'core/utils'

const resetPassword = (password, token) => {
  const action = {
    key: 'user',
    endpoint: `auth/reset/${token}`,
    method: 'POST',
    body: {
      password: password
    },
    dataType: {}
  }

 return createAction('CALL_API', action)
}

export default { resetPassword }
