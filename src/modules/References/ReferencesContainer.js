// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { filter } from 'lodash'

// Modules
import References from './References'
import Actions from './ReferencesActions'

const mergeState = (type, data) => {
  if (type === 'published') {
    return filter(data, reference => { return reference.is_published })
  }

  if (type === 'unpublished') {
    return filter(data, reference => { return !reference.is_published })
  }
}

class ReferencesContainer extends Component {
  state = { index: 0, published: [], unpublished: [] }

  componentWillMount () {
    this.props.getAllReferences()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data === this.props.data) return

    const { data } = nextProps

    this.setState({ published: mergeState('published', data), unpublished: mergeState('unpublished', data) })
  }

  handleSubmit = (type, id) => {
    if (type === 'publish') {
      this.props.publishReference(id).then(response => {
        this.props.getAllReferences()
      })
    } else if (type === 'unpublish') {
      this.props.unpublishReference(id).then(response => {
        this.props.getAllReferences()
      })
    }
  }

  handleTabChange = (index) => {
    this.setState({ index: index })
  }

  render () {
    const { id, isFetching } = this.props

    return !isFetching
      ? <References
        index={ this.state.index }
        handleSubmit={ this.handleSubmit }
        handleTabChange={ this.handleTabChange }
        published={ this.state.published }
        unpublished={ this.state.unpublished }
        userId={ id } /> : null
  }
}

ReferencesContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getAllReferences: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  publishReference: PropTypes.func.isRequired,
  unpublishReference: PropTypes.func.isRequired
}

const mapStateToProps = ({ api: { references = {}, user = {} } }) => {
  const { data = [], isFetching = true } = references
  const { data: { id = 0 } } = user

  return { data, id, isFetching }
}

export default connect(mapStateToProps, Actions)(ReferencesContainer)
