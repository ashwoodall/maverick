import { createAction } from 'core/utils'

const sendEmail = (user) => {
  const action = {
    key: 'user',
    endpoint: 'auth/forgot',
    method: 'POST',
    body: user,
    dataType: {}
  }

 return createAction('CALL_API', action)
}

export default { sendEmail }
