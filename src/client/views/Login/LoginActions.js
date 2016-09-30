import constants from 'core/constants'
import configureApi from 'core/configureApi'

const api = (user) => {
  let url = '/auth/login'
  let key = 'user'

  return configureApi(url, key, user)
}

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: constants.reducerActions.CALL_API, api: api(user) })
  }
}
