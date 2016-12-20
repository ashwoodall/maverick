// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Components
import AccountSettings from './AccountSettings'

// Actions
import Actions from './AccountSettingsActions.js'

class AccountSettingsContainer extends Component {
  state = { active: false, disabled: false, delete: false }

  componentWillMount () {
    const { data } = this.props

    this.setState({ disabled: data.disabled })
  }

  componentWillReceiveProps (nextProps) {
    const { data } = nextProps

    this.setState({ disabled: data.disabled })
  }

  handleEnable = () => {
    const { enableUser, data } = this.props

    enableUser(data.id)

  }

  handleDisable = () => {
    const { disableUser, data } = this.props

    this.setState({ active: false, disbled: true })

    disableUser(data.id)
  }

  handleDelete = () => {
    const { deleteUser, data } = this.props

    deleteUser(data.id)
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active })
  }

  handleToggleDelete = () => {
    this.setState({ delete: !this.state.delete })
  }

  render () {
    const { data, isFetching } = this.props

    return !isFetching ?
      <AccountSettings
        active={ this.state.active }
        showDelete={ this.state.delete }
        disabled={ this.state.disabled }
        handleEnable={ this.handleEnable }
        handleDisable={ this.handleDisable }
        handleDelete={ this.handleDelete }
        handleToggle={ this.handleToggle }
        handleToggleDelete={ this.handleToggleDelete }
        user={ data } /> : null
  }
}

AccountSettingsContainer.propTypes = {
  data: PropTypes.object.isRequired,
  disableUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = ({ api: { user = {} } }) => {
  const { data = {}, isFetching = true } = user

  return { data, isFetching }
}

export default connect(mapStateToProps, Actions)(AccountSettingsContainer)
