import { createAction } from 'core/utils'

const activate = (key) => {
  const action = {
    body: {
      encryptedId: key
    },
    dataType: {},
    endpoint: 'auth/activate',
    method: 'PUT'
  }

  return createAction('CALL_API', action)
}

export default { activate }
