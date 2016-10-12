// Core
import React from 'react'

import Auth from 'modules/Auth/Auth'

const Signup = ({ register, registered }) => {
	console.log(`is user register? ${registered}`)
	return (<Auth type='register' submit={ register } />)
}

export default Signup