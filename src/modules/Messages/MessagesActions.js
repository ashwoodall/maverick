import { createAction } from 'core/utils'

export const getAllConversations = (id) => {
  const action = {
    key: 'messages',
    endpoint: 'conversations',
    method: 'GET',
    dataType: []
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

export const getConversation = (conversation) => {
  const action = {
    key: 'conversation',
    endpoint: `messages/${conversation.id}`,
    method: 'GET',
    dataType: []
  }

  const appAction = {
    key: 'currentConversation',
    payload: {
      firstname: conversation.participant.first_name,
      lastname: conversation.participant.last_name,
      profilePicture: conversation.participant.profile_picture,
      id: conversation.id
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
    dispatch(createAction('CALL_APP', appAction))
  }
}
