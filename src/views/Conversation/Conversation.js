// Core
import React from 'react'

// Components
import Container from 'components/Container'

// Modules
import ConversationContainer from 'modules/Conversation'

const Conversation = (props) => (
  <div data-oh-hi='conversation-view'>
    <Container>
      <ConversationContainer { ...props } />
    </Container>
  </div>
)

export default Conversation
