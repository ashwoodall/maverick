// Core
import React, { PropTypes } from 'react'

// Thirdparty
import Flexbox from 'react-material-flexbox'

// Components
import Subheader from 'components/Subheader'

const Messages = ({ conversations }) => (
  <div data-oh-hi='messages-module'>
    <Subheader title='Messages' />
  </div>
)

Messages.propTypes = {
  conversations: PropTypes.array.isRequired
}

export default Messages
