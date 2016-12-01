// Core
import React, { Component, PropTypes } from 'react'

// Thirdparty
import { Avatar, Button, Card, CardActions, CardText, CardTitle, IconButton, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Conversation.scss'

class Conversation extends Component {

  componentDidUpdate () {
    if (!this.scroller) return

    this.scroller.scrollTop = this.scroller.scrollHeight
  }

  render () {
    const { currentUser, messages, currentConversation, message, handleChange, handleSubmit } = this.props

    return (
      <div className={ theme.conversation } data-oh-hi='conversation'>
        { messages.length > 0 &&
          <Card>
            <CardTitle className={ theme.title }>
              <Flexbox layout='row' align='start center' flex>
                <h5>{ `${currentConversation.firstname} ${currentConversation.lastname}` }</h5>
                <Flexbox flex />
                <IconButton icon='delete' />
                <IconButton icon='report' />
              </Flexbox>
            </CardTitle>
            <CardText>
              <div className={ theme.text } ref={ (element) => { this.scroller = element } }>
                <Flexbox layout='column' align='end start'>
                  { messages.map(message => (
                    <div className={ theme.wrap } key={ message.id }>
                      { message.author === currentUser &&
                        <Flexbox className={ theme.author } layout='row' align='end center'>
                          <div className={ theme.bubble }>{ message.body }</div>
                          <div className={ theme.arrow } />
                        </Flexbox>
                      }
                      { message.author !== currentUser &&
                        <Flexbox className={ theme.participant } layout='row' align='start center'>
                          { currentConversation.profilePicture
                            ? (<Avatar className={ theme.avatar } theme={ theme } image={ currentConversation.profilePicture } />)
                            : (<Avatar className={ theme.avatar } theme={ theme } title={ currentConversation.firstname } />) }
                          <div className={ theme.arrow } />
                          <div className={ theme.bubble }>{ message.body }</div>
                        </Flexbox>
                      }
                    </div>
                  )) }
                </Flexbox>
              </div>
            </CardText>
            <CardActions className={ theme.actions }>
              <Flexbox layout='row' align='start center' flex>
                <Input className={ theme.input } theme={ theme } multiline type='text' hint='Say hello...' name='message' value={ message } onChange={ (value) => handleChange(value) } />
                <Button className={ theme.button } icon='send' label='Send' accent onClick={ () => handleSubmit() } />
              </Flexbox>
            </CardActions>
          </Card>
        }
      </div>
    )
  }
}

Conversation.propTypes = {
  currentConversation: PropTypes.object.isRequired,
  currentUser: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Conversation
