import React from 'react'
import classnames from 'classnames'

// Thirdparty
import { Checkbox, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from '../ProfileEditor.scss'

const Military = (props) => (
  <Flexbox className={ theme.group } flex='70' layout='row' align='center center'>
    <Flexbox layout='column' flex>
      <h6>Current Duty Station</h6>
      <h4>Fort Hood</h4>
      <p>Recent or upcoming PCS? <a href="/">Change current duty station</a></p>
      <br/>
      <Checkbox label='I am a service member too!' />
    </Flexbox>
  </Flexbox>
)

export default Military