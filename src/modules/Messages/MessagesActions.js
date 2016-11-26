import { createAction } from 'core/utils'

export const getAllConversations = (id) => {
  const action = {
    key: 'conversations',
    endpoint: 'conversations',
    method: 'GET',
    dataType: []
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action)).then(response => {
      console.log(response)
    })
  }
}
