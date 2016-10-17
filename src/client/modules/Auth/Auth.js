import React, { Component } from 'react'

import { Button, Card, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import Svg from 'modules/Svg/Svg'

import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

import theme from 'modules/Auth/Auth.scss'

class AuthForm extends Component {
	state = { email: '', password: '' }

	handleChange = (name, value) => {
		this.setState({ ...this.state, [name]: value })
	}

	handleSubmit = () => {
		this.props.submit({...this.state})
	}

	render () {
		const { type, submit } = this.props
		let buttonLabel, link, aside

		if (type === 'login') {
			buttonLabel = 'Login'
			link = (<a className={ theme.forgot__password } href="#">Forgot Password?</a>)
			aside = (<p className={ theme.aside }>Need an account? <a href="/signup">Sign Up</a></p>)
		} else {
			buttonLabel = 'Sign up'
			link = (<span/>)
			aside = (<p className={ theme.aside }>Have an account? <a href="/login">Login</a></p>)
		}

		return (
			<div className={ theme.auth } data-oh-hi='auth'>
				<Flexbox layout='column' align='start center'>
					<Card className={ theme.card }>
						<Svg source={ HeaderLogo } className={ theme.logo } />
						<Input type='email' label='Email' name='email' value={ this.state.email } onChange={ this.handleChange.bind(this, 'email') } />
						<Input type='password' label='Password' name='password' value={ this.state.password } onChange={ this.handleChange.bind(this, 'password') } />
						<Button className={ theme.button } label={ buttonLabel } raised primary onClick={ this.handleSubmit } />
						{ link }
					</Card>
					{ aside }
				</Flexbox>
			</div>
		)
	}
}


export default AuthForm