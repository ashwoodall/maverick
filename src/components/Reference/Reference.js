// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Reference.scss'

const Reference = ({ children, reference }) => (
  <div className={ theme.reference } data-oh-hi='reference'>
    <Flexbox layout='row' flex>
      <Flexbox layout='row' flex='10' align='center center'>
        <FontIcon className={ theme.icon } value='tag_faces' />
      </Flexbox>
      <Flexbox layout='column' flex>
        <h4>{ reference.author.first_name } { reference.author.last_name.charAt(0) }</h4>
        <p>{ reference.body }</p>
      </Flexbox>
    </Flexbox>
    { children &&
      <Flexbox layout='row' align='end center'>
        { children }
      </Flexbox>
    }
  </div>
)

Reference.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.object.isRequired
}

export default Reference
