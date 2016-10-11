// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'

const Login = ({ login }) => (
	<Auth type='login' submit={ login } />
)

export default Login