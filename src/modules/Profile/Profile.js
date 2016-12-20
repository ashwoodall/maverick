// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Button, Link, Navigation } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import ProfileEditor from 'modules/ProfileEditor'
import AccountSettings from 'modules/AccountSettings'
import References from 'modules/References'

// Theme
import theme from './Profile.scss'

const Profile = ({ index, handleTabChange, handleLogOut }) => (
  <div className={ theme.profile } data-oh-hi='profile-module'>
    <Button className={ theme.button } label='Logout' onClick={ () => handleLogOut() } />
    <Flexbox layout='row' layout-sm='column' layout-xs='column'>
      <Flexbox flex='15' flex-sm='100' flex-xs='100'>
        <Navigation className={ theme.navigation } type='vertical'>
          <Link className={ index === 0 ? theme.active : null } label='Profile' active={ index === 0 } onClick={ () => handleTabChange(0) } />
          <Link className={ index === 1 ? theme.active : null } label='References' active={ index === 1 } onClick={ () => handleTabChange(1) } />
          <Link className={ index === 2 ? theme.active : null } label='Settings' active={ index === 2 } onClick={ () => handleTabChange(2) } />
        </Navigation>
      </Flexbox>
      <Flexbox flex>
        { index === 0 && <div className={ theme.content }><ProfileEditor /></div> }
        { index === 1 && <References /> }
        { index === 2 && <div className={ theme.content }><AccountSettings /></div> }
      </Flexbox>
    </Flexbox>
  </div>
)

Profile.propTypes = {
  index: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired
}

export default Profile
