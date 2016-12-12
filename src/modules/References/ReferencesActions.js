import { createAction } from 'core/utils'

const getAllReferences = (id) => {
  const action = {
    key: 'references',
    endpoint: `references`,
    method: 'GET',
    dataType: []
  }

  return createAction('CALL_API', action)
}

const publishReference = (id) => {
  const action = {
    key: 'reference',
    endpoint: `references/${id}/publish`,
    method: 'PUT',
    dataType: []
  }

  return createAction('CALL_API', action)
}

const unpublishReference = (id) => {
  const action = {
    key: 'reference',
    endpoint: `references/${id}/unpublish`,
    method: 'PUT',
    dataType: []
  }

  return createAction('CALL_API', action)
}

export default {
  getAllReferences: getAllReferences,
  publishReference: publishReference,
  unpublishReference: unpublishReference
}
