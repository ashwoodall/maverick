import { createAction } from 'core/utils'

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

const receiveSocket = (id) => {
  const action = {
    key: 'user',
    payload: {
      socketId: id
    }
  }

  return createAction('CALL_APP', action)
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

export default { getConversation, getMessages, receiveSocket, sendMessage }
