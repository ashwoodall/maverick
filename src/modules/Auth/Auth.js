// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, CardActions, CardText, Dropdown, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Logo
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Auth.scss'

const Auth = ({ handleChange, handleSubmit, handleValidation, message, stations, type, user, validation }) => (
  <div className={ theme.auth } data-oh-hi='auth'>
    <form role='form' onSubmit={ handleSubmit }>
      <Flexbox layout='column' align='start center'>
        <Card className={ theme.card }>
          <Flexbox layout='row' align='center center'>
            <img src={ HeaderLogo } className={ theme.logo } />
          </Flexbox>
          <CardText>
            { type === 'login' && <h5>Welcome back.</h5> }
            { type === 'register' && <p>Oh-hi is currently available to members stationed at Fort Hood, please join our <a href='/'>mailing list</a> to be notified when it becomes available at your duty station.</p> }
            { message && <p className={ theme.error }>{ message }</p> }
            <Input
              required
              type='email'
              label='Email'
              name='email'
              value={ user.email }
              error={ validation.email }
              onBlur={ () => handleValidation('email', user.email) }
              onChange={ (value) => handleChange('email', value) } />
            <Input
              required
              type='password'
              label='Password'
              name='password'
              value={ user.password }
              error={ validation.password }
              onBlur={ () => handleValidation('password', user.password) }
              onChange={ (value) => handleChange('password', value) } />
            { type === 'login' && <a className={ theme.forgot__password } href='/forgot'>Forgot Password?</a> }
            { type === 'register' &&
              <Dropdown auto disabled
                allowBlank={ false }
                label='Select your Duty Station'
                source={ stations }
                value={ user.current_station }
                onChange={ (value) => handleChange('current_station', value) } /> 
            }
          </CardText>
          <CardActions className={ theme.actions }>
            <Button className={ theme.button } label={ type === 'login' ? 'Sign up' : 'Login' } href={ type === 'login' ? '/signup' : '/login' } />
            <Button type='submit' className={ theme.button } label={ type === 'login' ? 'login' : 'Sign Up' } raised primary />
          </CardActions>
        </Card>
      </Flexbox>
    </form>
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
