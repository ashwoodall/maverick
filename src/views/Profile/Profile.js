// Core
import React from 'react'

// Thirdparty
import { Tab, Tabs } from 'react-toolbox'

// Components
import Container from 'components/Container/Container'

// Modules
import ProfileEditor from 'modules/ProfileEditor/ProfileEditorContainer'

// Theme 
import theme from './Profile.scss'

const Profile = () => (
  <div className={ theme.profile } data-oh-hi='profile-view'>
    <div className={ theme.toolbar } />
    <Container>
      <Tabs inverse>
        <Tab className={ theme.tab } theme={ theme } label='Profile'>
          <ProfileEditor />
        </Tab>
        <Tab label='References'>
          <div>Hello world</div>
        </Tab>
        <Tab label='Account Settings'>
          <div>Hello world</div>
        </Tab>
      </Tabs>
    </Container>
  </div>
)

export default Profile