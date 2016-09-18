// Core
import React, { Component, PropTypes} from 'react'

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
	state = { email: '', password: '' }

	handleChange = (name, value) => {
		this.setState({ ...this.state, [name]: value })
	}

	handleSubmit = () => {
		const { login } = this.props

		login(this.state)
	}

	render () {
		return (
			<div className={ theme.oh__login }>
				<div className={ theme.oh__login__container }>
					<Svg source={ HeaderLogo } className={ theme.oh__login__logo } />
					<Card className={ theme.oh__login__card }>
						<Input type='email' label='Email' name='email' value={ this.state.email } onChange={ this.handleChange.bind(this, 'email') } />
						<Input type='password' label='Password' name='password' value={ this.state.password } onChange={ this.handleChange.bind(this, 'password') } />
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