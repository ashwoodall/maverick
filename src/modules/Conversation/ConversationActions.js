import { createAction } from 'core/utils'

export const sendMessage = (message) => {
  const action = {
    key: 'message',
    endpoint: 'messages',
    method: 'POST',
    dataType: {},
    body: message
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

export const receiveMessage = (message) => {
  const action = {
    key: 'conversation',
    payload: message
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
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