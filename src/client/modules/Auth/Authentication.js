import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

const AuthFactory = (View) => {
	class Authentication extends Component {

		componentWillMount () {
			this.authenticate(this.props.authenticated)
		}

		componentWillReceiveProps (nextProps) {
			this.authenticate(nextProps.authenticated)
		}

		authenticate = (authenticated) => {
			if (!authenticated) {
				let redirectAfterLogin = this.props.location.pathname
				browserHistory.push(`/login?next=${redirectAfterLogin}`)
			}
		}

		render () {
			const { authenticated } = this.props

			let content = authenticated ? ( <View {...this.props} />) : null
			return (
				<div data-oh-hi='authenticated'>
					{ content }
				</div>
			)
		}
	}

	const mapStateToProps = (state) => {
		const { app } = state

		const {
			authenticated
		} = app['user'] || {
			authenticated: false
		} 
 		
 		return { authenticated }
 	}

 	return connect(mapStateToProps)(Authentication)
}

export default AuthFactory