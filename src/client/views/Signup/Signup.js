// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'
import Verification from 'modules/Verification/Verification'

const Signup = ({ register, registered, email }) => {

	if (!registered){
		return (<Auth type='register' submit={ register } />)
	} else {
		return (<Verification email={ email } />)
	}
				
}

export default Signup	