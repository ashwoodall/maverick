import { createAction } from 'core/utils'

const getReferences = (id) => {
  const action = {
    key: 'references',
    endpoint: `references/${id}`,
    method: 'GET',
    dataType: []
  }

  return createAction('CALL_API', action)
}

const getUserById = (id) => {
  const action = {
    key: 'person',
    endpoint: `user/${id}`,
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const startConversation = (person, message) => {
  const action = {
    key: 'message',
    payload: {
      userId: person.id,
      first_name: person.first_name,
      last_name: person.last_name,
      profile_picture: person.profile_picture,
      message: message
    }
  }

  return createAction('CALL_APP', action)
}

export default { getReferences, getUserById, startConversation }

