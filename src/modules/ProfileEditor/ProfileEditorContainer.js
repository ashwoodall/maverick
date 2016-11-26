// Core
import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { merge } from 'lodash'

// Modules
import ProfileEditor from './ProfileEditor'
import * as Actions from './ProfileEditorActions'

class ProfileEditorContainer extends Component {
  state = {
    expanded: {
      basic: true,
      intro: false,
      social: false,
      family: false,
      military: false
    },
    user: {
      first_name: '',
      last_name: '',
      avatar: '',
      birth_date: '',
      hometown: '',
      introduction: '',
      activities: [],
      facebook: '',
      twitter: '',
      instagram: '',
      pinterest: '',
      has_pets: 'no',
      about_pets: '',
      has_kids: 'noKids',
      number_of_kids: 0,
      kid_status: [],
      is_service_member: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps === this.props) return

    const { data } = nextProps
    const { user } = this.state

    this.setState({ user: merge({}, user, data) })
  }

  handleChange = (name, value) => {
    const newState = update(this.state, { user: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handlePanelChange = (name, value) => {
    const newState = update(this.state, { expanded: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handleCheck = (key, field, value) => {
    let newState

    if (this.state.user[key][field]) {
      newState = update(this.state, { user: { [key]: { $merge: { [field]: false } } } })
    } else {
      newState = update(this.state, { user: { [key]: { $merge: { [field]: true } } } })
    }

    this.setState(newState)
  }

  handleSubmit = () => {
    const { updateUser } = this.props

    updateUser(this.props.data.id, { ...this.state.user })
  }

  render () {
    return <ProfileEditor
      user={ this.state.user }
      expanded={ this.state.expanded }
      handleCheck={ this.handleCheck }
      handleChange={ this.handleChange }
      handlePanelChange={ this.handlePanelChange }
      handleSubmit={ this.handleSubmit } />
  }
}

ProfileEditorContainer.propTypes = {
  data: PropTypes.object,
  updateUser: PropTypes.func
}

const mapPropsToState = ({ api: { user: { data = {} } } }) => {
  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(ProfileEditorContainer)
