// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'
import Verification from 'modules/Verification/Verification'

const Signup = ({ register, registered }) => {
	console.log(`is user register? ${registered}`)
		return (
			<div>
				<div><Auth type='register' submit={ register } /></div>
				<div><Verification  /></div>
			</div>
		)
}

export default Signup