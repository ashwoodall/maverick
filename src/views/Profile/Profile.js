// Core
import React from 'react'

// Modules
import ProfileContainer from 'modules/Profile'

// Components
import Container from 'components/Container/Container'
import Subheader from 'components/Subheader'

const Profile = () => (
  <div data-oh-hi='profile-view'>
    <Container>
      <Subheader title='Profile Settings' />
      <ProfileContainer />
    </Container>
  </div>
)

export default Profile
