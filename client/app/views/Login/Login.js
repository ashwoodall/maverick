// Core
import React, { Component, PropTypes} from 'react'

// Thirdparty
import { Button, Card, Input } from 'react-toolbox'

// Modules 
import Container from 'modules/Container/Container'
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from 'views/Login/Login.scss'

const Login = (props) => (
	<div className={ theme.oh__login }>
		<Card className={ theme.oh__login__card }>
			<HeaderLogo className={ theme.oh__login__logo } />
			<Input type='email' label='Email' name='email' />
			<Input type='password' label='Password' name='password' />
			<a className={ theme.oh__forgot__password } href="#">Forgot Password?</a>
			<Button className={ theme.oh__login__button } label='Login' raised primary />
		</Card>
		<p>Need an account? <a href="/signup">Sign Up</a></p>
	</div>
)

export default Login