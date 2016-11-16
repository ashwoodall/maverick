// Core
import React from 'react'

// Thirdparty
import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Container from 'components/Container'
import Subheader from 'components/Subheader'

const Messages = () => (
  <div data-oh-hi='messages-view'>
    <Container>
      <Subheader title='Messages' />
      <br />
      <br />
      <Flexbox layout='column' align='center center'>
        <FontIcon value='forum' style={{ color: 'rgba(0,0,0,0.12)', fontSize: 128 }} />
        <h3 style={{ color: 'rgba(0,0,0,0.54)' }}>No messages</h3>
      </Flexbox>
    </Container>
  </div>
)

export default Messages
