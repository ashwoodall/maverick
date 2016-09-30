// Core
import React from 'react'

import { AuthForm } from 'modules/Auth'

const Signup = ({ register }) => (
	<AuthForm type='register' submit={ register } />
)


export default Signup