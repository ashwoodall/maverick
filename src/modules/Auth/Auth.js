// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, Dropdown, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Svg from 'components/Svg/Svg'

// Logo
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from './Auth.scss'

const Auth = ({ email, password, current_station, handleChange, handleSubmit, stations, type }) => (
  <div className={ theme.auth } data-oh-hi='auth'>
    <Flexbox layout='column' align='start center'>
      <Card className={ theme.card }>
        <Svg source={ HeaderLogo } className={ theme.logo } />
        <Input type='email' label='Email' name='email' value={ email } onChange={ (value) => handleChange('email', value) } />
        <Input type='password' label='Password' name='password' value={ password } onChange={ (value) => handleChange('password', value) } />
        { type === 'register' && <Dropdown label='Select your Duty Station' auto source={ stations } value={ current_station } onChange={ (value) => handleChange('current_station', value) } /> }
        <Button className={ theme.button } label={ type === 'login' ? 'login' : 'Sign Up' } raised primary onClick={ () => handleSubmit() } />
        { type === 'login' && <a className={ theme.forgot__password } href='#'>Forgot Password?</a> }
      </Card>
      <p className={ theme.aside }>
        { type === 'login' && (<span>Need an account? <a href='/signup'>Sign Up</a></span>) || (<span>Have an account? <a href='/login'>Login</a></span>) }
      </p>
    </Flexbox>
  </div>
)

Auth.propTypes = {
  current_station: PropTypes.string,
  email: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  stations: PropTypes.array.isRequired,
  type: PropTypes.string
}

export default Auth
