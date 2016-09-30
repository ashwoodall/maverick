// Core
import React from 'react'

import { AuthForm } from 'modules/Auth'

const Login = ({ login }) => (
	<AuthForm type='login' submit={ login } />
)


export default Login