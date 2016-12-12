import { createAction } from 'core/utils'

const getUserById = (id) => {
  const action = {
    key: 'person',
    endpoint: `user/${id}`,
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const saveReference = (id, reference) => {
  const action = {
    key: 'reference',
    endpoint: `references`,
    method: 'POST',
    dataType: {},
    body: {
      recipient_id: id,
      body: reference
    }
  }

  return createAction('CALL_API', action)
}

export default {
  getUserById: getUserById,
  saveReference: saveReference
}
