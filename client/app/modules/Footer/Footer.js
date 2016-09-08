// Core
import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'

// Thirdparty
import { Navigation, Link } from 'react-toolbox'

// Modules
import Flexbox from 'modules/Flexbox/Flexbox'

// Theme 
import theme from 'modules/Footer/Footer.scss'


class Footer extends Component {
	render() {
		const { active } = this.props
		
		const classes = classnames( theme.oh__footer,
			{ 
				[theme.oh__active]: active
			}
		)

		return (
			<footer className={ classes } aria-label="Oh hi footer">
				<Flexbox layout="row" align="center center">
					<p>If you have a suggestion to improve Oh-hi or would like to share a story about making new friends, we'd love to hear from you. Send us an email! <a href="mailto:hi@oh-hi.us">hi@oh-hi.us</a></p>
				</Flexbox>	
			</footer>
		)
	}
}

export default Footer