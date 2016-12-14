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

const setFile = (file) => {
  const action = {
    key: 'fileUpload',
    payload: {
      file: file
    }
  }

  return createAction('CALL_APP', action)
}

export default { getCredentials, setFile }

