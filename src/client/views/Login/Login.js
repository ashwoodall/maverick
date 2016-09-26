// Core
import React, { Component, PropTypes} from 'react'
import { forEach } from 'lodash'

import validation from 'core/constants/validation'

// Thirdparty
import { Button, Card, Input } from 'react-toolbox'

// Modules 
import Container from 'modules/Container/Container'
import Svg from 'modules/Svg/Svg'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from 'views/Login/Login.scss'

class Login extends Component {
	state = { email: { value: '', dirty: false }, password: { value: '', dirty: false }, dirty: false }

	handleChange = (name, value) => {
		let message, regex

		if (name === 'email')
			regex = validation['email'].regex
			message = validation['email'].message

		if (!regex.test(value))
			this.setState({ ...this.state, [name]: { value: value, dirty: true, message: message }})
		else 
			this.setState({ ...this.state, [name]: { value: value }})
	}

	handleSubmit = () => {
		let dirty 
		const { login } = this.props

		forEach(this.state, item => {
			if (item.dirty)
				dirty = true
				this.setState({ dirty: true })
		})

		if (!dirty)
			login({ email: this.state.email.value, password: this.state.password.value })
	}

	handleValidation = (type) => {
		let regex = validation[type].regex

		console.log(regex)
	}

	render () {
		return (
			<div className={ theme.oh__login }>
				<div className={ theme.oh__login__container }>
					<Svg source={ HeaderLogo } className={ theme.oh__login__logo } />
					<Card className={ theme.oh__login__card }>
						<Input type='email' label='Email' name='email' value={ this.state.email.value } onChange={ this.handleChange.bind(this, 'email') } error={ this.state.dirty ? this.state.email.message : '' } />
						<Input type='password' label='Password' name='password' value={ this.state.password.value } onChange={ this.handleChange.bind(this, 'password') } />
						<a className={ theme.oh__forgot__password } href="#">Forgot Password?</a>
						<Button className={ theme.oh__login__button } label='Login' raised primary onClick={ this.handleSubmit } />
					</Card>
					<p>Need an account? <a href="/signup">Sign Up</a></p>
				</div>
			</div>
		)
	}
}

export default Login