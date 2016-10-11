// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'

const Signup = ({ register }) => (
	<Auth type='register' submit={ register } />
)

export default Signup