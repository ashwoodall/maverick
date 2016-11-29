// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Card, CardText, FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import MessageList from 'components/MessageList'
import Subheader from 'components/Subheader'


import theme from './Messages.scss'

const Messages = ({ messages }) => (
  <div className={ theme.messages } data-oh-hi='messages-module'>
    <Subheader title='Messages' />
    { messages.length === 0 &&
      <Flexbox layout='column' align='center center'>
        <FontIcon className={ theme.icon } value='forum' />
        <h2>No messages</h2>
      </Flexbox> 
    }
    { messages.length > 0 && 
      <Flexbox layout='row'>
        <Flexbox flex='30'>
          <Card>
            <MessageList messages={ messages } />
          </Card>
        </Flexbox>
        <Flexbox flex>
          <Card>
            <CardText>
              Conversation will go here
            </CardText>
          </Card>
        </Flexbox>
      </Flexbox>
    }
  </div>
)

Messages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default Messages
