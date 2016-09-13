// Core
import classnames from 'classnames'
import React, { Component, PropTypes } from 'react'

// Thirdparty
import { Navigation, Link } from 'react-toolbox'

// Modules
import Flexbox from 'modules/Flexbox/Flexbox'
import Toolbar from 'modules/Toolbar'
import Svg from 'modules/Svg/Svg'

// Assets 
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Styles
import theme from 'modules/Header/Header.scss'

class Header extends Component {
	render() {
		const { active } = this.props
		
		const classes = classnames(theme.oh__appBar,
			{
				[theme.oh__active]: active
			}
		)

		return (
			<header className={ classes } aria-label="Navigation Toolbar">
				<Toolbar className={ theme.oh__appBar__toolbar }>
					<Svg className={ theme.oh__appBar__logo } source={ HeaderLogo } />
					<Flexbox flex={ true } />
				</Toolbar>
			</header>
		)
	}
}

export default Header