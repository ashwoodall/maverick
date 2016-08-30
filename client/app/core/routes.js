// Core
import React from 'react'
import { Route } from 'react-router'

// Views
import App from 'views/App'
import Home from 'views/Home/Home'
import Login from 'views/Login/LoginContainer'
import Signup from 'views/Signup/SignupContainer'

export const routes = () => ({
	path: '/',
	component: App,
	indexRoute: { component: Home },
	childRoutes: [
		{ path: 'login', component: Login },
		{ path: 'signup', component: Signup }
	]
})

export default routes