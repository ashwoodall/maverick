// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'
import Verification from 'modules/Verification/Verification'

const Signup = ({ register, registered, email }) => {
	console.log(`is user register? ${registered}`)

	if (!registered){
		return (<div><Auth type='register' submit={ register } /></div>)
	} else {
		return (<div><Verification email={ email } /></div>)
	}
				
}

export default Signup	