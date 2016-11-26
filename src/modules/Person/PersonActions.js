import { createAction } from 'core/utils'

export const getUserById = (id) => {
  const action = {
    key: 'person',
    endpoint: `user/${id}`,
    method: 'GET',
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

export const startConversation = (userId, recipientId) => {
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

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

