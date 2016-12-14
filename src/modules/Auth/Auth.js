// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, CardActions, CardText, Dropdown, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Svg from 'components/Svg/Svg'

// Logo
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Theme
import theme from './Auth.scss'

const Auth = ({ handleChange, handleSubmit, handleValidation, message, stations, type, user, validation }) => (
  <div className={ theme.auth } data-oh-hi='auth'>
    <form role='form' onSubmit={ handleSubmit } >
      <Flexbox layout='column' align='start center'>
        <Card className={ theme.card }>
          <Svg source={ HeaderLogo } className={ theme.logo } />
          <CardText>
            { type === 'login' && <h5>Welcome back.</h5> }
            { type === 'register' && <p>Oh-hi is currently available to members stationed at Fort Hood, please join our <a href='/'>mailing list</a> to be notified when it becomes available at your duty station.</p> }
            { message && <p className={ theme.error }>{ message }</p> }
            <Input
              type='email'
              label='Email'
              name='email'
              value={ user.email }
              error={ validation.email }
              onBlur={ () => handleValidation('email', user.email) }
              onChange={ (value) => handleChange('email', value) } />
            <Input
              type='password'
              label='Password'
              name='password'
              value={ user.password }
              error={ validation.password }
              onBlur={ () => handleValidation('password', user.password) }
              onChange={ (value) => handleChange('password', value) } />
            { type === 'login' && <a className={ theme.forgot__password } href='#'>Forgot Password?</a> }
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
