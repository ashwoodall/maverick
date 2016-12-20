// Core
import React from 'react'

// Modules
import Auth from 'modules/Auth/AuthContainer'

const Signup = (props) => (
  <Auth type='register' { ...props } />
)

export default Signup
