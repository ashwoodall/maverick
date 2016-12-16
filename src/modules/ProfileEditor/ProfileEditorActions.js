import { createAction } from 'core/utils'

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

export default { updateUser }


