import cookie from 'react-cookie'

const isAuthorized = () => {
  return !!cookie.load('jwt')
}

export default isAuthorized
