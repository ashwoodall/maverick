// Core
import React from 'react'

// Thirdparty
import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Container from 'components/Container'

// Modules
import MessagesContainer from 'modules/Messages'

const Messages = () => (
  <div data-oh-hi='messages-view'>
    <Container>
      <MessagesContainer />
    </Container>
  </div>
)

export default Messages
