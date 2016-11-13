import React, { PropTypes } from 'react'

import { Button, Card, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import Svg from 'components/Svg/Svg'

import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

import theme from './Auth.scss'

const Auth = ({ email, password, handleChange, handleSubmit, type }) => (
  <div className={ theme.auth } data-oh-hi='auth'>
    <Flexbox layout='column' align='start center'>
      <Card className={ theme.card }>
        <Svg source={ HeaderLogo } className={ theme.logo } />
        <Input type='email' label='Email' name='email' value={ email } onChange={ (value) => handleChange('email', value) } />
        <Input type='password' label='Password' name='password' value={ password } onChange={ (value) => handleChange('password', value) } />
        <Button className={ theme.button } label={ type === 'login' ? 'login' : 'Sign Up'  } raised primary onClick={ () => handleSubmit() } />
        { type === 'login' && (<a className={ theme.forgot__password } href="#">Forgot Password?</a>) }
      </Card>
      <p className={ theme.aside }>
        { type === 'login' && (<span>Need an account? <a href="/signup">Sign Up</a></span>) || (<span>Have an account? <a href="/login">Login</a></span>) }
      </p>
    </Flexbox>
  </div>
)

Auth.propTypes = {
  email: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Auth