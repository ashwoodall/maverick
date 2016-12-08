// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import MessageList from 'components/Messages'
import Subheader from 'components/Subheader'

// Modules
import Conversation from 'modules/Conversation'

// Theme
import theme from './Messages.scss'

const Messages = ({ conversation, conversations, handleConversationClick, messages }) => (
  <div className={ theme.messages } data-oh-hi='messages-module'>
    <Subheader title='Messages' divider={ false } />
    { conversations.length === 0 &&
      <Flexbox layout='column' align='center center'>
        <FontIcon className={ theme.icon } value='forum' />
        <h2>No messages</h2>
      </Flexbox>
    }
    { conversations.length > 0 &&
      <Flexbox className={ theme.wrapper } layout='row'>
        <Flexbox flex='30'>
          <MessageList messages={ conversations } handleConversationClick={ handleConversationClick } />
        </Flexbox>
        <Flexbox flex>
          <Conversation />
        </Flexbox>
      </Flexbox>
    }
  </div>
)

Messages.propTypes = {
  conversations: PropTypes.array.isRequired,
  handleConversationClick: PropTypes.func.isRequired
}

export default Messages
