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

const getConversation = (conversation) => {
  const action = {
    key: 'conversation',
    endpoint: `conversations/${conversation.id}`,
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const getMessages = (conversation) => {
  const action = {
    key: 'messages',
    endpoint: `messages/${conversation.id}`,
    method: 'GET',
    dataType: []
  }

  return createAction('CALL_API', action)
}

export default {
  getAllConversations: getAllConversations,
  getConversation: getConversation,
  getMessages: getMessages
}
