import { createAction } from 'core/utils'
import { browserHistory } from 'react-router'

const disableUser = (id) => {
  const action = {
    key: 'user',
    endpoint: `user/${id}/disable`,
    method: 'PUT',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const deleteUser = (id) => {
  const action = {
    key: 'user',
    endpoint: `user/${id}/delete`,
    method: 'PUT',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const enableUser = (id) => {
  const action = {
    key: 'user',
    endpoint: `user/${id}/enable`,
    method: 'PUT',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

export default { disableUser, deleteUser, enableUser }