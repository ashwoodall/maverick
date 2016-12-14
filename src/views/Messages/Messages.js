// Core
import React from 'react'

// Components
import Container from 'components/Container'
import Subheader from 'components/Subheader'

// Modules
import MessagesContainer from 'modules/Messages'

const Messages = () => (
  <div data-oh-hi='messages-view'>
    <Container>
      <Subheader title='Messages' />
      <MessagesContainer />
    </Container>
  </div>
)

export default Messages
