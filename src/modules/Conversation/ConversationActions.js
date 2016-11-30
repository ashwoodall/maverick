import { createAction } from 'core/utils'

export const sendMessage = (id, message) => {
  const action = {
    key: 'message',
    endpoint: 'messages',
    method: 'POST',
    dataType: {},
    body: {
      convo_id: id,
      body: message
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}
