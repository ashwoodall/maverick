// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Button, Card, CardActions, CardText, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Forgot.scss'

const Forgot = ({ handleChange, handleSubmit, handleValidation, user, validation }) => (
  <div className={ theme.forgot } data-oh-hi='forgot-password'>
    <form role='form' onSubmit={ handleSubmit }>
      <Flexbox layout='column' align='start center'>
        <Card className={ theme.card }>
          <Flexbox layout='row' align='center center'>
            <img src={ HeaderLogo } className={ theme.logo } />
          </Flexbox>
          <CardText>
            <h5>Forgot your password?</h5>
            <p>We'll send you a link to reset your password. Enter the email address associated with your account below</p>
            <Input
                required
                type='email'
                label='Email'
                name='email'
                value={ user.email }
                error={ validation.email }
                onBlur={ () => handleValidation('email', user.email) }
                onChange={ (value) => handleChange('email', value) } />
          </CardText>
          <CardActions className={ theme.actions }>
            <Button type='submit' className={ theme.button } label='Send' raised primary />
          </CardActions>
        </Card>
      </Flexbox>
    </form>
  </div>
)

Forgot.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired
}

export default Forgot
