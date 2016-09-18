import configureApi from 'core/configureApi'

export default (user) => {
  let url = '/auth/login'
  let key = 'login'

  return configureApi(url, key, user)
}
