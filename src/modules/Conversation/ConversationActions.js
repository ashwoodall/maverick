import { createAction } from 'core/utils'

const deleteConversation = (conversation) => {
  const action = {
    key: 'conversation',
    endpoint: `conversations/${conversation}/soft_delete`,
    method: 'PUT',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const getConversation = (conversation) => {
  const action = {
    key: 'conversation',
    endpoint: `conversations/${conversation}`,
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const getMessages = (conversation) => {
  const action = {
    key: 'messages',
    endpoint: `messages/${conversation}`,
    method: 'GET',
    dataType: []
  }

  return createAction('CALL_API', action)
}

const getUnreadConversationCount = () => {
  const action = {
    key: 'unread',
    endpoint: 'unread/conversations',
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const sendMessage = (recipientId, message) => {
  const action = {
    key: 'message',
    endpoint: 'messages',
    method: 'POST',
    dataType: {},
    body: {
      recipient_id: recipientId,
      body: message
    }
  }

  return createAction('CALL_API', action)
}

const updateReadStatus = (conversation) => {
  const action = {
    endpoint: `conversations/${conversation}/is_read`,
    method: 'PUT',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

export default { deleteConversation, getConversation, getMessages, getUnreadConversationCount, sendMessage, updateReadStatus }
