// Core
import React from 'react'

// Components
import Container from 'components/Container'

// Modules
import ConversationContainer from 'modules/Conversation'
import NewMessageContainer from 'modules/NewMessage'

const Conversation = (props) => (
  <div data-oh-hi='conversation-view'>
    <Container>
      { props.params.conversationId !== 'new' && <ConversationContainer { ...props } /> }
      { props.params.conversationId === 'new' && <NewMessageContainer /> }
    </Container>
  </div>
)

export default Conversation
