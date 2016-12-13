// Core
import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { forOwn, includes, merge } from 'lodash'
import moment from 'moment'

// Modules
import ProfileEditor from './ProfileEditor'
import * as Actions from './ProfileEditorActions'

const mergeUser = (apiUser, user, file) => {
  let newUser = {}

  forOwn(apiUser, (value, key) => {
    if (value) {
      if (key === 'birth_date') {
        newUser[key] = moment(value).format('MM/DD/YYYY')
      } else if (key === 'has_pets') {
        newUser[key] = value ? 'yes' : 'no'
      } else {
        newUser[key] = value
      }
    }
  })

  if (file) {
    newUser['profile_picture'] = file
  }

  return merge({}, user, newUser)
}

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
      profile_picture: '',
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
      is_service_member: false,
      completed_profile: false
    },
    activityLimit: false,
    showExample: false
  }

  componentWillReceiveProps (nextProps) {
    const { data, file } = nextProps
    const { user } = this.state

    this.setState({ user: mergeUser(data, user, file) })
  }

  componentDidMount () {
    const { data } = this.props
    const { user } = this.state

    this.setState({ user: mergeUser(data, user) })
  }

  handleChange = (name, value) => {
    const newState = update(this.state, { user: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handlePanelChange = (name, value) => {
    const newState = update(this.state, { expanded: { $merge: { [name]: value } } })

    this.setState(newState)
  }

  handleCheck = (key, field) => {
    let newArray = this.state.user[key]

    if (!includes(newArray, field)) {
      if (newArray.length > 1 && key === 'activities') {
        this.setState({ activityLimit: true })

        return
      }

      newArray.push(field)
    } else {
      this.setState({ activityLimit: false })

      newArray = newArray.filter(item => item !== field)
    }

    const newState = update(this.state, { user: { $merge: { [key]: newArray } } })

    this.setState(newState)
  }

  handleExampleToggle = () => {
    this.setState({ showExample: !this.state.showExample })
  }

  handleSubmit = () => {
    const { updateUser } = this.props

    let userClone = this.state.user

    forOwn(userClone, (value, key) => {
      if (value === '') delete userClone[key]
    })

    updateUser(userClone)
  }

  handleToggle = () => {
    this.setState({ activityLimit: !this.state.activityLimit })
  }

  render () {
    const { isFetching } = this.props

    return !isFetching 
      ? <ProfileEditor
      user={ this.state.user }
      expanded={ this.state.expanded }
      handleCheck={ this.handleCheck }
      handleChange={ this.handleChange }
      handleExampleToggle={ this.handleExampleToggle }
      handlePanelChange={ this.handlePanelChange }
      handleSubmit={ this.handleSubmit }
      handleToggle={ this.handleToggle }
      limit={ this.state.activityLimit }
      showExample={ this.state.showExample } /> : null
  }
}

ProfileEditorContainer.propTypes = {
  data: PropTypes.object.isRequired,
  file: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateUser: PropTypes.func
}

const mapPropsToState = ({ api, app }) => {
  const { data, isFetching } = api['user'] || { data: {}, isFetching: true }
  const { file } = app['fileUpload'] || { file: '' }

  return { data, file, isFetching }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(ProfileEditorContainer)
