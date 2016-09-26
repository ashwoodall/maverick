import constants from 'core/constants'
import configureApi from 'core/configureApi'

const api = (user) => {
  let url = '/auth/register'
  let key = 'register'

  return configureApi(url, key, user)
}

export const register = (user) => {
  return (dispatch) => {
    dispatch({ type: constants.reducerActions.CALL_API, api: api(user) })
  }
}
