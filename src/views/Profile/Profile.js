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

class Profile extends React.Component {
  state = {
    inverseIndex: 1
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  render() {
    return (
      <div className={ theme.profile } data-oh-hi='profile-view'>
        <div className={ theme.toolbar } />
        <Container> 
          <Tabs index={this.state.inverseIndex} onChange={this.handleInverseTabChange} inverse>
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
  }
}


export default Profile
