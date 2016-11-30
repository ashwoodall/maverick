import fetch from 'isomorphic-fetch'
import { getToken } from 'core/utils'

/*
 * @name fetchJSON
 * @description makes request using isomorphic fetch
 * @param {string}           endpoint enpoint url
 * @param {string}           method   enpoint method
 * @param {string || object} body     endpoint body
 */
const fetchJSON = (endpoint, method, body) => {
  let options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': getToken()
    }
  }

  if (body) options.body = JSON.stringify(body)

  return fetch(endpoint, options)
    .then(response => response.json())
}

export default fetchJSON
