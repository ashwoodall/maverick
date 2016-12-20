// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, CardActions, CardText, Dropdown, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Logo
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Reset.scss'

const Reset = ({ reset, handleChange, handleSubmit, handleValidation, user, validation }) => (
  <div className={ theme.reset } data-oh-hi='reset'>
    { !reset &&
      <form role='form' onSubmit={ handleSubmit }>
        <Flexbox layout='column' align='start center'>
          <Card className={ theme.card }>
            <Flexbox layout='row' align='center center'>
              <img src={ HeaderLogo } className={ theme.logo } />
            </Flexbox>
            <CardText>
              <h5>Choose new password.</h5>
              <Input
                required
                type='password'
                label='New Password'
                name='password'
                value={ user.password }
                error={ validation.password }
                onBlur={ () => handleValidation('password', user.password) }
                onChange={ (value) => handleChange('password', value) } />
              <Input
                required
                type='password'
                label='Confirm Password'
                name='password'
                value={ user.passwordConfirm }
                error={ validation.passwordConfirm }
                onBlur={ () => handleValidation('passwordConfirm', user.passwordConfirm) }
                onChange={ (value) => handleChange('passwordConfirm', value) } />
            </CardText>
            <CardActions className={ theme.actions }>
              <Button type='submit' className={ theme.button } label='Reset Password' raised primary />
            </CardActions>
          </Card>
        </Flexbox>
      </form>
    }
    { reset &&
      <Flexbox layout='column' align='start center'>
        <Card className={ theme.card }>
          <Flexbox layout='row' align='center center'>
            <img src={ HeaderLogo } className={ theme.logo } />
          </Flexbox>
          <CardText>
            <Flexbox layout='column' align='center center'>
              <h5>Your password has been reset!</h5>
              <p>You may now <a href='/login'>Login</a></p>
            </Flexbox>
          </CardText>
        </Card>
      </Flexbox>
    }
  </div>
)

Reset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleValidation: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired
}

export default Reset
