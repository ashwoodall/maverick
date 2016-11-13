const isAuthorized = () => {
  return !!sessionStorage.jwt
}

export default isAuthorized