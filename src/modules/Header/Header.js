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
          <Link className={ active === null || active === '/people' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='People' icon='people' onClick={ () => handleClick('people') } />
          <Link className={ active === '/messages' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='Messages' icon='forum' onClick={ () => handleClick('messages') } />
          <Link className={ active === '/profile' ? classnames(theme.link, theme.active) : theme.link } theme={ theme } label='Profile' onClick={ () => handleClick('profile') } icon={ <Avatar className={ theme.avatar } image='https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p320x320/14925568_351751435169655_5558516257312023873_n.jpg?oh=22d89b90395390c2764b6d81462a1ae7&oe=58BD890C' /> } />
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
