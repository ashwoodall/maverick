// Core
import React, { Component, PropTypes} from 'react'

// Thirdparty
import { Button, Dropdown, Card, Input } from 'react-toolbox'

// Modules 
import Container from 'modules/Container/Container'
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from 'views/Login/Login.scss'

const Login = (props) => (
	<div className={ theme.oh__login }>
		<div className={ theme.oh__login__container }>
			<HeaderLogo className={ theme.oh__login__logo } />
			<Card className={ theme.oh__login__card }>
				<Input type='email' label='Email' name='email' />
				<Input type='password' label='Password' name='password' />
				<Dropdown className={ theme.oh__login__select } auto source={ props.stations } label='Select your duty station'/>
				<br/>
				<Button className={ theme.oh__login__button } label='Signup' raised primary />
			</Card>
			<p>Have an account? <a href="/login">Login</a></p>
		</div>
	</div>
)

export default Login