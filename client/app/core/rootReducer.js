// Core
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Lets combine the reducers
const reducers = {
  routing: routerReducer
}

export default combineReducers(reducers);
