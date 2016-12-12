// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Modules
import Reference from './Reference'
import Actions from './ReferenceActions'

class ReferenceContainer extends Component {
  state = { reference: '', submitted: false }

  componentWillMount () {
    const { userId } = this.props.params
    this.props.getUserById(userId)
  }

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit = (id) => {
    this.setState({ submitted: true })
    this.props.saveReference(id, this.state.reference)
  }

  render () {
    const { data, isFetching } = this.props

    return !isFetching
      ? <Reference
        data={ data }
        handleChange={ this.handleChange }
        handleSubmit={ this.handleSubmit }
        reference={ this.state.reference }
        submitted={ this.state.submitted } /> : null
  }
}

ReferenceContainer.propTypes = {
  data: PropTypes.object.isRequired,
  getUserById: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  saveReference: PropTypes.func.isRequired
}

const mapStateToProps = ({ api: { person = {} } }) => {
  const { data = {}, isFetching = true } = person

  return { data, isFetching }
}

export default connect(mapStateToProps, Actions)(ReferenceContainer)
