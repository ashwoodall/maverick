import { createAction } from 'core/utils'
import { browserHistory } from 'react-router'

const getAllConversations = (id) => {
  const action = {
    key: 'conversations',
    endpoint: 'conversations',
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

const getUserByToken = () => {
  const action = {
    key: 'user',
    endpoint: 'user/by/token',
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const showSnackBar = () => {
  const action = {
    key: 'snackbar',
    payload: {
      active: true,
      content: 'As soon as you\'re ready, make sure to <a href="/profile">complete your profile</a>'
    }
  }

  return createAction('CALL_APP', action)
}

export default { getAllConversations, getUnreadConversationCount, getUserByToken, showSnackBar }