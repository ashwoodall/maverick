// Core
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Thirdparty
import { Snackbar } from 'react-toolbox'

// Modules
import * as Actions from './SnackbarActions'

// Theme 
import theme from './Snackbar.scss'

class SnackbarContainer extends Component {

  handleSnackbarClick = () => {
    this.props.closeSnackBar()
  }

  render () {
    const { active, content } = this.props

    return <Snackbar
      theme= { theme }
      action='Dismiss'
      active={ active }
      timeout={ 7000 }
      onClick={ this.handleSnackbarClick }
      onTimeout={ this.handleSnackbarClick }
      type='cancel'><div dangerouslySetInnerHTML={{ __html: content }} /></Snackbar>
  }

}

SnackbarContainer.propTypes = {
  active: PropTypes.bool.isRequired,
  closeSnackBar: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired
}

const mapPropsToState = ({ app: { snackbar } }) => {
  const { active, content } = snackbar || { active: false, content: '' }

  return { active, content }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(SnackbarContainer)
