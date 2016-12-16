// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, Card, CardActions, CardText, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Svg from 'components/Svg/Svg'

// Logo
import HeaderLogo from 'assets/oh-hi_Logo.png'

// Theme
import theme from './Reference.scss'

const Reference = ({ data, handleChange, handleSubmit, reference, submitted }) => (
  <div className={ theme.reference } data-oh-hi='auth'>
    { !submitted &&
      <Flexbox layout='column' align='start center'>
        <Card className={ theme.card }>
          <Flexbox layout='row' align='center center'>
            <img src={ HeaderLogo } className={ theme.logo } />
          </Flexbox>
          <CardText>
            <h4>Is { data.first_name } { data.last_name.charAt(0) }. a friend of yours?</h4>
            <h4>Leave { data.first_name } a friend reference.</h4>
            <p>References help Oh-hi members figure out if they’ll click with each other. They are generally a few sentences about how you met and what you find valuable about your friendship. { data.first_name } will be able to review the reference before it is published.</p>
            <Input type='text' label='Your Reference' name='reference' value={ reference } onChange={ (value) => handleChange('reference', value) } />
          </CardText>
          <CardActions className={ theme.actions }>
            <Button className={ theme.button } label='Cancel' href={ `person/${data.id}` } />
            <Button className={ theme.button } label='Send' raised primary onClick={ () => handleSubmit(data.id) } />
          </CardActions>
        </Card>
      </Flexbox>
    }
    { submitted &&
      <Flexbox layout='column' align='center center'>
        <img src={ HeaderLogo } className={ theme.logo } />
        <h4>Thanks for leaving your reference!</h4>
        <p>We'll let { data.first_name } know it's available.</p>
        <a href={ `/person/${data.id}` }>Return to { data.first_name }'s profile.</a>
      </Flexbox>
    }
  </div>
)

Reference.propTypes = {
  data: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reference: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired
}

export default Reference
