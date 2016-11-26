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
    this.props.getUsersByStation()
  }

  handleUserClick = (id) => {
    browserHistory.push(`/person/${id}`)
  }

  render () {
    const { data } = this.props

    return <People people={ data } onClick={ this.handleUserClick } />
  }
}

PeopleContainer.propTypes = {
  data: PropTypes.array.isRequired,
  getUsersByStation: PropTypes.func
}

const mapStateToProps = ({ api: { people = {} } }) => {
  const { data = [] } = people

  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
