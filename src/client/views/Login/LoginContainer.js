// Core
import React, { Component, PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


// Modules
import Login from 'views/Login/Login'

// Api 
import * as Actions from 'views/Login/LoginActions'

class LoginContainer extends Component {

	componentWillMount() {
		this.props.setHeader(false)
		this.props.setFooter(false)
	}

	render() {
		return ( <Login login={ this.props.login } /> )
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginContainer)