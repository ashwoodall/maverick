// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Modules
import Person from './Person'
import * as Actions from './PersonActions'

class PersonContainer extends Component {
  componentWillMount () {
    this.props.getUserById(this.props.userId)
  }

  render () {
    const { data } = this.props

    return <Person person={ data } />
  }
}

PersonContainer.propTypes = {
  data: PropTypes.object.isRequired,
  getUserById: PropTypes.func,
  userId: PropTypes.number.isRequired
}

const mapStateToProps = ({ api: { person = {} } }) => {
  const { data = {} } = person

  return { data }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer)
