// Core
import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'

// Thirdparty
import { AppBar } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import Svg from 'modules/Svg/Svg'

// Assets 
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Styles
import theme from 'modules/Header/Header.scss'

class Header extends Component {
	render() {
		const { active } = this.props
		
		const classes = classnames(theme.appBar,
			{
				[theme.active]: active
			}
		)

		return (
			<div className={ classes } data-oh-hi='header'>
				<AppBar className={ theme.header } flat>
					<Flexbox className={ theme.wrapper } layout='row' flex align='start center'>
						<Svg className={ theme.logo } source={ HeaderLogo } />
					</Flexbox>
				</AppBar>
			</div>
		)
	}
}

export default Header