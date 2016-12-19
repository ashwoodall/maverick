import { createAction } from 'core/utils'

const getAllConversations = (id) => {
  const action = {
    key: 'conversations',
    endpoint: 'conversations',
    method: 'GET',
    dataType: []
  }

  return createAction('CALL_API', action)
}

export default { getAllConversations }
