// Core
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

// Views
import App from 'views/App'
import Home from 'views/Home/Home'
import Login from 'views/Login/LoginContainer'
import Signup from 'views/Signup/SignupContainer'

const childRoutes = (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home }/>
		<Route path="login" component={ Login }/>
		<Route path="signup" component={ Signup }/>
	</Route>
)

const routes = (props) => (
	<Router history={ props.history }>
		{ childRoutes }
	</Router>
)

export default routes