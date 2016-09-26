// Core
import React, { Component, PropTypes} from 'react'

// Thirdparty
import { Button, Dropdown, Card, Input } from 'react-toolbox'

// Modules 
import Container from 'modules/Container/Container'
import Svg from 'modules/Svg/Svg'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from 'views/Login/Login.scss'

class Signup extends Component {
	state = { email: '', password: '', station: '' }

	handleChange = (name, value) => {
		this.setState({ ...this.state, [name]: value })
	}

	handleSubmit = (event) => {
		const { register } = this.props
		
		register(this.state)
	}

	render () {
		return (
			<div className={ theme.oh__login }>
				<div className={ theme.oh__login__container }>
					<Svg source={ HeaderLogo } className={ theme.oh__login__logo } />
					<Card className={ theme.oh__login__card }>
						<Input type='email' label='Email' name='email' value={ this.state.email } onChange={ this.handleChange.bind(this, 'email') } />
						<Input type='password' label='Password' name='password' value={ this.state.password } onChange={ this.handleChange.bind(this, 'password') } />
						<Dropdown className={ theme.oh__login__select } auto source={ this.props.stations } label='Select your duty station'/>
						<br/>
						<Button className={ theme.oh__login__button } label='Signup' raised primary onClick={ this.handleSubmit } />
					</Card>
					<p>Have an account? <a href="/login">Login</a></p>
				</div>
			</div>
		)
	}
}

export default Signup