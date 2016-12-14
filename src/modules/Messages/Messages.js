// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import MessageList from 'components/Messages'

// Theme
import theme from './Messages.scss'

const Messages = ({ conversations, handleConversationClick }) => (
  <div className={ theme.messages } data-oh-hi='messages-module'>
    { conversations.length === 0 &&
      <Flexbox layout='column' align='center center'>
        <FontIcon className={ theme.icon } value='forum' />
        <h2>No messages</h2>
      </Flexbox>
    }
    { conversations.length > 0 &&
      <Flexbox layout='row' flex>
        <MessageList messages={ conversations } handleConversationClick={ handleConversationClick } />
      </Flexbox>
    }
  </div>
)

Messages.propTypes = {
  conversations: PropTypes.array.isRequired,
  handleConversationClick: PropTypes.func.isRequired
}

export default Messages
