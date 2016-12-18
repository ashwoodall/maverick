import { createAction } from 'core/utils'

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

export default { sendMessage }