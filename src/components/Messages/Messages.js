// Core
import React, { PropTypes } from 'react'
import moment from 'moment'

// Thirdpart
import { Avatar, Card, List, ListDivider, ListItem, ListSubHeader } from 'react-toolbox'

const Messages = ({ messages, handleConversationClick }) => (
  <div data-oh-hi='message-list'>
    <Card>
      <List selectable ripple>
        <ListSubHeader caption='My Messages' />
        { messages.map((conversation, index) => {
          return (
            <div key={ conversation.id }>
              <ListDivider />
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
    </Card>
  </div>
)

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  handleConversationClick: PropTypes.func.isRequired
}

export default Messages
