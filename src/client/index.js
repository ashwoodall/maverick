// Core
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'
import { Provider } from 'react-redux'

import configureStore from 'core/configureStore'
import Routes from 'core/configureRoutes'

const documentRoot = document.getElementById('root')
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store)

const renderApp = () => {
	render (
		<AppContainer errorReporter={ Redbox }>
			<Provider store={ store }>
				<Routes history={ history } />
			</Provider>
		</AppContainer>,
		documentRoot
	)
}

if (__DEV__) {
	if (module.hot) {
		module.hot.accept('./core/configureRoutes', renderApp);
	}
}

renderApp()