import { createAction } from 'core/utils'

export const updateUser = (user) => {
  user.completed_profile = isComplete(user)
  user.current_station = 'Fort Hood'

  const action = {
    key: 'user',
    endpoint: `user`,
    method: 'PUT',
    body: user,
    dataType: {}
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

const isComplete = (user) => {
  if (user.first_name && user.last_name && user.birth_date && user.hometown && user.introduction && user.activities.length > 0) {
    return true
  } else {
    return false
  }
}

