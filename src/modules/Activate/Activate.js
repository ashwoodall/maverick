// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Svg from 'components/Svg/Svg'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Activate.scss'

const Activate = () => (
  <div className={ theme.activate } data-oh-hi='activate'>
    <Flexbox layout='column' align='start center'>
      <Card className={ theme.card }>
        <Flexbox layout='row' align='center center'>
          <img src={ HeaderLogo } className={ theme.logo } />
        </Flexbox>
        <Flexbox layout='column' align='center center'>
          <h3>Welcome to Oh-hi!</h3>
          <p>Oh-hi is about military spouses meeting up in person to make new friends. Take a look around, fill out your profile, and start connecting.</p>
          <Button label='Come on in!' raised primary href='/login' />
        </Flexbox>
      </Card>
    </Flexbox>
  </div>
)

export default Activate
