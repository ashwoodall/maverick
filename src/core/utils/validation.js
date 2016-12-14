const validate = (type, value) => {
  switch (type) {
    case 'email':
      return email(value)
    case 'password':
      return password(value)
    default:
      return value
  }
}

const email = (value) => {
  let format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (format.test(value)) return

  return 'Please enter a valid email address'
}

const password = (value) => {
  let size = value.length
  let min = parseFloat(8, 10)
  let max = parseFloat(255, 10)

  if (size < min) {
    return 'Password must be at least 8 characters'
  } else if (size > max) {
    return 'Password must be fewer than 255 characters'
  } else {
    return
  }
}

export default validate