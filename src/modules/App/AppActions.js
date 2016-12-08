import { createAction } from 'core/utils'
import { browserHistory } from 'react-router'

export const getUserByToken = () => {
  const action = {
    key: 'user',
    endpoint: 'user/by/token',
    method: 'GET',
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action)).then(response => {
      if (!response.payload.success) {
        sessionStorage.clear()
        
        browserHistory.push('/login')
      }

      if (response.payload.data && !response.payload.data.completed_profile) dispatch(showSnackBar())
    })
  }
}

export const showSnackBar = () => {
  const action = {
    key: 'snackbar',
    payload: {
      active: true,
      content: 'As soon as you\'re ready, make sure to <a href="/profile">complete your profile</a>'
    }
  }

  return (dispatch) => {
    dispatch(createAction('CALL_APP', action))
  }
}