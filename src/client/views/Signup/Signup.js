// Core
import React from 'react'

import Auth from 'modules/Auth/AuthContainer'
import Verification from 'modules/Verification/Verification'

const Signup = ({ email }) => {
	return email ? (<Verification email={ email } />) : (<Auth type='register' />)
}

export default Signup	