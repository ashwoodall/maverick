import { createAction } from 'core/utils'

export const sendMessage = (message) => {
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

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

export const receiveSocket = (id) => {
  const action = {
    key: 'user',
    payload: {
      socketId: id
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}
