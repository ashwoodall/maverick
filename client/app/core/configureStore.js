import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import appMiddleware from 'middlewares/appMiddleware'
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'


export default (preloadedState, history) => {

  let loggerMiddleware = createLogger()

  let middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
    appMiddleware,
    loggerMiddleware
  ]

  let store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares)
    )
  )

  return store
}