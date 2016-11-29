// Core
import React from 'react'
import moment from 'moment'

// Thirdpart
import { Avatar, List, ListDivider, ListItem, ListSubHeader } from 'react-toolbox'

// Theme
import theme from './MessageList.scss'

const MessageList = ({ messages }) => (
  <div className={ theme.messageList } data-oh-hi='message-list'>
    <List selectable ripple>
      <ListSubHeader caption='My Messages' />
      { messages.map((message, index) => {
        return (
          <div key={ message.id }>
            <ListDivider />
            <ListItem selectable
              avatar={ message.participant.profile_picture
                ? (<Avatar image={ message.participant.profile_picture } />)
                : (<Avatar title={ message.participant.first_name } />) }
              caption={ `${message.participant.first_name} ${message.participant.last_name}` }
              legend={ <span className={ theme.date }>{ moment(message.lastMessage.timestamp).fromNow() }</span> } />
          </div>
        )
      })}
    </List>
  </div>
)

export default MessageList