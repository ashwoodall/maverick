import { createAction } from 'core/utils'

const showFirstSave = () => {
  const action = {
    key: 'snackbar',
    payload: {
      active: true,
      content: 'Your profile is ready! <br /><br /> You can now access all the features of Oh-hi!'
    }
  }

  return createAction('CALL_APP', action)
}

const showSnackBar = () => {
  const action = {
    key: 'snackbar',
    payload: {
      active: true,
      content: 'Your profile settings have been saved!'
    }
  }

  return createAction('CALL_APP', action)
}


const updateUser = (user) => {
  user.current_station = 'Fort Hood'

  const action = {
    key: 'user',
    endpoint: `user`,
    method: 'PUT',
    body: user,
    dataType: {}
  }

  return createAction('CALL_API', action)
}

export default { showFirstSave, showSnackBar, updateUser }


