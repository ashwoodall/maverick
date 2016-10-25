// Core 
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// Thirdparty
import { Avatar, Button, Checkbox, FontIcon, Input, ListDivider, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import { Panel, PanelGroup } from 'modules/Panel'
import BasicInfo from './Sections/BasicInfo'
import IntroduceYourself from './Sections/IntroduceYourself'
import SocialMedia from './Sections/SocialMedia'
import Family from './Sections/Family'
import Military from './Sections/Military'

import theme from './ProfileEditor.scss'

class ProfileEditor extends Component {
  state = { index: 1 }

  handlePanelChange = (index) => {
    this.setState({ index })
  }

  render () {

    return (
      <div data-oh-hi='profile-editor'>
        <PanelGroup>
          <Panel title='Basic info' subTitle='(required section)' expanded={ this.state.index === 1 }>
            <BasicInfo onTextChange={ this.handleChange } onPanelChange={ this.handlePanelChange } />
          </Panel>
          <Panel title='Introduce Yourself' subTitle='(required section)' expanded={ this.state.index === 2 }>
            <IntroduceYourself />
          </Panel>
          <Panel title='Social Media' subTitle='(optional)' expanded={ this.state.index === 3 }>
            <SocialMedia />
          </Panel>
          <Panel title='Family' subTitle='(optional)' expanded={ this.state.index === 4 }>
            <Family />
          </Panel>
          <Panel title='History with the Military' subTitle='(optional)' expanded={ this.state.index === 5 }>
            <Military />
          </Panel>
        </PanelGroup>
        <Flexbox layout='row' align='end center'>
          <Button label='Save Changes' raised primary />
        </Flexbox>
      </div>
    )
  }
}

export default ProfileEditor