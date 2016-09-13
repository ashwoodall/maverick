// Constants
import constants from 'core/constants'
import { messages } from 'core/constants/messages'
import fetch from 'isomorphic-fetch'

export default store => next => action => {
  if (action.type !== constants.reducerActions.CALL_API) return next(action)

  const endpoint = action.api

  next({ type: endpoint.actionTypes.request })

  return callApi(endpoint)
    .then(response => next({
      type: endpoint.actionTypes.receive,
      key: endpoint.key,
      response
    }),
    error => next({
      type: endpoint.actionTypes.error,
      message: messages.noLoad,
      error
    }))
}

const callApi = (endpoint) => {
  let props = { 
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  if (endpoint.body)
    props.body = JSON.stringify(endpoint.body) 

  return fetch(endpoint.url, props)
    .then(checkStatus)
    .then(response => response.json())
}

const checkStatus = (response) => {
  console.log(response)
  if (response.status >= 200 && response.status < 400)
    return response
  else {
    const err = new Error(response)
    err.status = response.statusText
    console.log(err)
    throw err
  }
}

