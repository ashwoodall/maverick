// Core
import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import { connect } from 'react-redux'
import { forOwn, includes, merge } from 'lodash'
import moment from 'moment'
import { validate } from 'core/utils'

// Modules
import ProfileEditor from './ProfileEditor'
import Actions from './ProfileEditorActions'

const mergeUser = (apiUser, user, file) => {
  let newUser = {}

  forOwn(apiUser, (value, key) => {
    if (value) {
      if (key === 'birth_date') {
        newUser[key] = new Date(value)
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
    validation: {
      first_name: '',
      last_name: '',
      profile_picture: '',
      birth_date: '',
      hometown: '',
      introduction: '',
      facebook: '',
      twitter: '',
      instagram: '',
      pinterest: '',
      about_pets: ''
    },
    activityLimit: false,
    showExample: false,
    isComplete: false
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

  handleSubmit = (event) => {
    event.preventDefault()

    const { user } = this.state

    if (!user.first_name || !user.last_name || !user.birth_date || !user.hometown || !user.introduction || user.activities.length === 0) {
      alert('Please complete required sections')

      return
    }
    
    const { showFirstSave, showSnackBar, updateUser } = this.props

    let userClone = this.state.user

    forOwn(userClone, (value, key) => {
      if (value === '') delete userClone[key]
    })

    if (!this.state.user.completed_profile) showFirstSave()

    updateUser(userClone).then(result => {
      showSnackBar()
    })
  }

  handleToggle = () => {
    this.setState({ activityLimit: !this.state.activityLimit })
  }

  handleValidation = (type, field, value) => {
    let message = validate(type, value)
    let newState 

    if (message) {
      newState = update(this.state, { validation: { $merge: { [field]: message } } })
    } else {
      newState = update(this.state, { validation: { $merge: { [field]: '' } } })
    }

    this.setState(newState)
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
      handleValidation={ this.handleValidation }
      limit={ this.state.activityLimit }
      showExample={ this.state.showExample }
      validation={ this.state.validation } /> : null
  }
}

ProfileEditorContainer.propTypes = {
  data: PropTypes.object.isRequired,
  file: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  showFirstSave: PropTypes.func.isRequired,
  showSnackBar: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired
}

const mapPropsToState = ({ api, app }) => {
  const { data, isFetching } = api['user'] || { data: {}, isFetching: true }
  const { file } = app['fileUpload'] || { file: '' }

  return { data, file, isFetching }
}

export default connect(mapPropsToState, Actions)(ProfileEditorContainer)
