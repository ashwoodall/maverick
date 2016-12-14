import { createAction } from 'core/utils'
import { browserHistory } from 'react-router'

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

export default { getUserByToken, showSnackBar }