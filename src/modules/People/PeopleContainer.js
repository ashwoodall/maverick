// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { isEqual } from 'lodash'

// Modules
import People from './People'
import * as Actions from './PeopleActions'

class PeopleContainer extends Component {
  state = { hasPeople: false }

  shouldComponentUpdate (nextProps) {
    return isEqual(nextProps.people, this.props.people)
  }

  componentWillUpdate (nextProps) {
    const { user } = nextProps

    if (user.data && user.data.current_station) {
      this.props.getUsersByStation(user.data.current_station)
    }
  }

  handleUserClick = (id) => {
    browserHistory.push(`/person/${id}`)
  }

  render () {
    const { people } = this.props

    return <People people={ people.data } onClick={ this.handleUserClick } />
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.object.isRequired,
  getUsersByStation: PropTypes.func,
  user: PropTypes.object.isRequired
}

const mapStateToProps = ({ api }) => {
  const people = api['people'] || { data: [], isFetching: true }
  const user = api['user'] || { data: {}, isFetching: true }

  return { people, user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
