import cookie from 'react-cookie'

const getToken = () => {
  return cookie.load('jwt')
}

export default getToken
