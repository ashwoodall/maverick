// Core
import React from 'react'

// Thirdparty
import { Tab, Tabs } from 'react-toolbox'

// Components
import Container from 'components/Container/Container'

// Modules
import ProfileEditor from 'modules/ProfileEditor/ProfileEditorContainer'
import AccountSettings from 'modules/AccountSettings/AccountSettings'

// Theme
import theme from './Profile.scss'

const Profile = ({ index, handleInverseTabChange }) => (
  <div className={ theme.profile } data-oh-hi='profile-module'>
    <div className={ theme.toolbar } />
    <Container> 
      <Tabs index={ index } onChange={ handleInverseTabChange } fixed>
        <Tab className={ theme.tab } theme={ theme } label='Profile'>
          <ProfileEditor />
        </Tab>
        <Tab label='References'>
          <div>Hello world</div>
        </Tab>
        <Tab label='Account Settings'>
          <AccountSettings />
        </Tab>
      </Tabs>
    </Container>
  </div>
)

export default Profile
