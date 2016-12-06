import { createAction } from 'core/utils'

export const getUsersByStation = (current_station) => {
  const action = {
    key: 'people',
    endpoint: `users/${current_station}`,
    method: 'GET',
    dataType: []
  }

  return (dispatch) => {
    dispatch(createAction('CALL_API', action))
  }
}

