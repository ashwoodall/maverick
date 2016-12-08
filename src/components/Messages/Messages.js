// Core
import React, { PropTypes } from 'react'
import moment from 'moment'

// Thirdpart
import { Avatar, Card, List, ListDivider, ListItem, ListSubHeader } from 'react-toolbox'

// Theme
import theme from './Messages.scss'

const Messages = ({ messages, handleConversationClick }) => (
  <div className={ theme.messageList } data-oh-hi='message-list'>
    <List className={ theme.list } selectable ripple>
      { messages.map((conversation, index) => {
        return (
          <div key={ conversation.id }>
            <ListItem
              selectable
              avatar={ conversation.participant.profile_picture
                ? (<Avatar image={ conversation.participant.profile_picture } />)
                : (<Avatar title={ conversation.participant.first_name } />) }
              caption={ `${conversation.participant.first_name} ${conversation.participant.last_name}` }
              legend={ `${moment(conversation.lastMessage.timestamp).fromNow()}` }
              onClick={ () => handleConversationClick(conversation) } />
          </div>
        )
      })}
    </List>
  </div>
)

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  handleConversationClick: PropTypes.func.isRequired
}

export default Messages
