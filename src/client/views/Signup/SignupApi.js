import configureApi from 'core/configureApi'

export default (user) => {
  let url = '/auth/register'
  let key = 'register'

  return configureApi(url, key, user)
}
