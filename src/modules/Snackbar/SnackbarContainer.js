// Core
import React, { Component } from 'react'
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
      action='Dismiss'
      active={ active }
      timeout={ 5000 }
      onClick={ this.handleSnackbarClick }
      onTimeout={ this.handleSnackbarClick }
      type='cancel'><div dangerouslySetInnerHTML={{__html: content }}/></Snackbar>
  }

}

const mapPropsToState = ({ app: { snackbar } }) => {
  const { active, content } = snackbar || { active: false, content: '' }

  return { active, content }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapPropsToState, mapDispatchToProps)(SnackbarContainer)