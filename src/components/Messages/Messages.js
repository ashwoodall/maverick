// Core
import React, { PropTypes } from 'react'
import moment from 'moment'
import classnames from 'classnames'

// Thirdpart
import { Avatar, List, ListDivider, ListItem } from 'react-toolbox'

// Theme
import theme from './Messages.scss'

const Messages = ({ messages, handleConversationClick }) => (
  <div className={ theme.messageList } data-oh-hi='message-list'>
    <List className={ theme.list } selectable ripple>
      { messages.map((conversation, index) => (
        <div key={ conversation.id }>
          <ListItem
            className={ conversation.is_read ? theme.listItem : classnames(theme.listItem, theme.notify) }
            theme={ theme }
            selectable
            avatar={ conversation.participant.profile_picture
              ? (<Avatar image={ conversation.participant.profile_picture } />)
              : (<Avatar title={ conversation.participant.first_name } />) }
            caption={ `${conversation.participant.first_name} ${conversation.participant.last_name}` }
            legend={ conversation.last_message_snippet }
            rightIcon={ conversation.is_read ? <span>{ `${moment(conversation.updated_at).fromNow()}`  }</span> : 'fiber_manual_record' }
            onClick={ () => handleConversationClick(conversation) } />
          { index !== messages.length - 1 && <ListDivider className={ theme.divider } theme={ theme } divider /> }
        </div>
      ))}
    </List>
  </div>
)

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  handleConversationClick: PropTypes.func.isRequired
}

export default Messages
