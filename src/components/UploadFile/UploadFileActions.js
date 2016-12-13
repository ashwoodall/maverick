import { createAction } from 'core/utils'

const getCredentials = (file) => {
  const action = {
    key: 's3Credentials',
    endpoint: `s3_credentials?file-name=${file.name}&file-type=${file.type}`,
    method: 'GET',
    dataType: {}
  }

  return createAction('CALL_API', action)
}

const uploadFile = (file, request, url) => {
  let xhr = new XMLHttpRequest()
  
  xhr.open('PUT', request)
  xhr.setRequestHeader('Cache-Control', 'public')
  xhr.setRequestHeader('x-amz-acl', 'public-read')
  xhr.send(file)

  const action = {
    key: 'fileUpload',
    payload: {
      file: url
    }
  }

  return createAction('CALL_APP', action)
}

export default { getCredentials, uploadFile }

