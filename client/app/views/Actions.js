// Constants
import constants from 'core/constants'
import configureAction from 'core/configureAction'

export const setHeader = (payload) => {
	let key = 'header'
	
	payload = {
		active: payload
	}

  return (dispatch) => {
    dispatch(configureAction(key, payload))
  }
}

export const setFooter = (payload) => {
	let key = 'footer'
	
	payload = {
		active: payload
	}

  return (dispatch) => {
    dispatch(configureAction(key, payload))
  }
}

