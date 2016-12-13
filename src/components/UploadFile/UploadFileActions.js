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

const setFile = (url) => {
  const action = {
    key: 'fileUpload',
    payload: {
      url: url
    }
  }

  return createAction('CALL_APP', action)
} 

const uploadFile = (file, request, url) => {
  const action = {
    key: 'fileUpload',
    external: true,
    endpoint: request,
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
      'x-amz-acl': 'public-read'
    },
    body: { file: file },
    dataType: { url: url }
  }

  return createAction('CALL_API', action)
}

export default { getCredentials, setFile, uploadFile }

