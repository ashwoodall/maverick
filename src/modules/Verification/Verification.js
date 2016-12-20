// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Card, FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Verification.scss'

const Verification = ({ email }) => (
  <div className={ theme.verification } data-oh-hi='verification'>
    <Flexbox layout='column' align='start center'>
      <Card className={ theme.card }>
        <Flexbox layout='row' align='center center'>
          <img src={ HeaderLogo } className={ theme.logo } />
        </Flexbox>
        <Flexbox layout='column' align='center center'>
          <h3>Check your email!</h3>
          <FontIcon className={ theme.mail } value='mail_outline' />
          <p>For your security, we need to verify your email address.</p>
          <Flexbox className={ theme.email } layout='column' align='center center'>
            <p>We sent an email to:</p>
            <h5>{email}</h5>
          </Flexbox>
          <p>Please click the link in the email to proceed.</p>
        </Flexbox>
      </Card>
    </Flexbox>
  </div>
)

Verification.propTypes = {
  email: PropTypes.string.isRequired
}

export default Verification
