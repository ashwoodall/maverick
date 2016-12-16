import { createAction } from 'core/utils'

const sendMessage = (message) => {
  const action = {
    key: 'message',
    endpoint: 'messages',
    method: 'POST',
    dataType: {},
    body: {
      convo_id: message.convo_id,
      body: message.body
    }
  }

  return createAction('CALL_API', action)
}

const startConversation = (userId, recipientId) => {
  const action = {
    key: 'conversation',
    endpoint: 'conversations',
    method: 'POST',
    body: {
      initiator_id: userId,
      recipient_id: recipientId
    },
    dataType: {}
  }

  return createAction('CALL_API', action)
}

export default { sendMessage, startConversation }