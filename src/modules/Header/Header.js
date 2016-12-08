// Core
import classnames from 'classnames'
import React, { PropTypes } from 'react'

// Thirdparty
import { AppBar, Avatar, Link, Navigation } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import Svg from 'components/Svg/Svg'

// Assets
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'

// Styles
import theme from './Header.scss'

const Header = ({ active, handleClick }) => (
  <div className={ theme.appBar } data-oh-hi='header'>
    <AppBar className={ theme.header } flat fixed>
      <Flexbox className={ theme.wrapper } layout='row' flex align='space-between center'>
        <Svg className={ theme.logo } source={ HeaderLogo } />
        <Navigation className={ theme.navigation }>
          <Link className={ active === null || active === '/people' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='People' onClick={ () => handleClick('people') } />
          <Link className={ active === '/messages' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='Messages' onClick={ () => handleClick('messages') } />
          <Link className={ active === '/profile' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='Profile' onClick={ () => handleClick('profile') } />
        </Navigation>
      </Flexbox>
    </AppBar>
  </div>
)

Header.propTypes = {
  active: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Header
