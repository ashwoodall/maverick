const validate = (type, value) => {
  switch (type) {
    case 'email':
      return email(value)
    case 'password':
      return password(value)
    case 'passwordConfirm':
      return password(value)
    case 'url':
      return url(value)
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

const url = (value) => {
  let format = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
  
  if (format.test(value)) return

  return 'Please enter a valid url'
}

export default validate