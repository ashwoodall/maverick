// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'

// Modules
import People from './People'
import * as Actions from './PeopleActions'

class PeopleContainer extends Component {

  componentWillMount () {
    this.props.getUsersByStation('Fort Hood')
  }

  handleUserClick = (id) => {
    browserHistory.push(`/person/${id}`)
  }

  render () {
    const { data, isFetching } = this.props

    return isFetching ? null : <People people={ data } onClick={ this.handleUserClick } />
  }
}

PeopleContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getUsersByStation: PropTypes.func,
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = ({ api: { people = {} } }) => {
  const { data = [], isFetching = true } = people

  return { data, isFetching }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
