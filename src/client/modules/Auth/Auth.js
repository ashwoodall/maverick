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
    const { login, register, type } = this.props

    if (type === 'login') return login({...this.state})
    else if (type === 'register') return register({...this.state})
  }

  render () {
    const { type } = this.props

    return (
      <div className={ theme.auth } data-oh-hi='auth'>
        <Flexbox layout='column' align='start center'>
          <Card className={ theme.card }>
            <Svg source={ HeaderLogo } className={ theme.logo } />
            <Input type='email' label='Email' name='email' value={ this.state.email } onChange={ this.handleChange.bind(this, 'email') } />
            <Input type='password' label='Password' name='password' value={ this.state.password } onChange={ this.handleChange.bind(this, 'password') } />
            <Button className={ theme.button } label={ type === 'login' ? 'login' : 'Sign Up'  } raised primary onClick={ this.handleSubmit } />
            { type === 'login' && (<a className={ theme.forgot__password } href="#">Forgot Password?</a>) }
          </Card>
          <p className={ theme.aside }>
            { type === 'login' && (<span>Need an account? <a href="/signup">Sign Up</a></span>) || (<span>Have an account? <a href="/login">Login</a></span>) }
          </p>
        </Flexbox>
      </div>
    )
  }
}


export default AuthForm