// Core
import React, { Component, PropTypes } from 'react'
import moment from 'moment'

// Thirdparty
import { Avatar, Button, IconButton, Input, List, ListItem, ListDivider } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Conversation.scss'

class Conversation extends Component {

  componentWillReceiveProps () {
    if (!this.scroller) return

    this.scroller.scrollTop = this.scroller.scrollHeight
  }

  componentDidMount () {
    if (!this.scroller) return

    this.scroller.scrollTop = this.scroller.scrollHeight
  }

  render () {
    const { conversation, currentUser, handleChange, handleSubmit, message, messages } = this.props

    return (
      <div className={ theme.conversation } data-oh-hi='conversation'>
        <Flexbox layout='row' flex align='start center'>
          <h4 className={ theme.title }>{ `${conversation.participant.first_name} ${conversation.participant.last_name.charAt(0)}.` }</h4>
          <Flexbox flex />
          <IconButton className={ theme.fontIcon } icon='delete' />
        </Flexbox>
        <ListDivider />
        <Flexbox layout='column'>
          <div className={ theme.messages } ref={ (element) => { this.scroller = element } }>
            <Flexbox layout='column' align='end start'>
              { messages.length > 0 &&
                <List>
                  { messages.map((message, index) => (
                    <div key={ `message_${message.id}` }>
                      { message.author === currentUser.id &&
                        <ListItem
                          className={ theme.listItem }
                          theme={ theme }
                          avatar={ currentUser.profile_picture ? (<Avatar cover image={ currentUser.profile_picture } />) : (<Avatar title={ currentUser.first_name } />) }
                          caption={ `${currentUser.first_name} ${currentUser.last_name.charAt(0)}.` }
                          legend={ message.body }
                          rightIcon={ <span>{ `${moment(message.timestamp).fromNow()}` }</span> } />

                      }
                      { message.author !== currentUser.id &&
                        <ListItem
                          className={ theme.listItem }
                          theme={ theme }
                          key={ `message_${message.id}` }
                          avatar={ conversation.participant.profile_picture ? (<Avatar cover image={ conversation.participant.profile_picture } />) : (<Avatar title={ conversation.participant.first_name } />) }
                          caption={ `${conversation.participant.first_name} ${conversation.participant.last_name.charAt(0)}.` }
                          legend={ message.body }
                          rightIcon={ <span>{ `${moment(message.timestamp).fromNow()}` }</span> } />
                      }
                      { index !== messages.length - 1 && <ListDivider inset /> }
                    </div>
                  )) }
                </List>
              }
            </Flexbox>
          </div>
          <Flexbox className={ theme.actions } layout='row' align='start center' flex>
            <Input
              className={ theme.input }
              theme={ theme }
              multiline
              type='text'
              hint='Say hello...'
              name='message'
              value={ message }
              onChange={ (value) => handleChange(value) } />
            <Button
              className={ theme.button }
              icon='send'
              label='Send'
              accent
              onClick={ () => handleSubmit() } />
          </Flexbox>
        </Flexbox>
      </div>
    )
  }
}

Conversation.propTypes = {
  conversation: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Conversation
