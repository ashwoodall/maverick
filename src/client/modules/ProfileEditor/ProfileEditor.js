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

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  }

  render () {
    return (
      <form>
        <PanelGroup>
          <Panel title='Basic info' subTitle='(required section)' expanded>
            <BasicInfo onTextChange={ this.handleChange } />
          </Panel>
          <Panel title='Introduce Yourself' subTitle='(required section)'>
            <IntroduceYourself />
          </Panel>
          <Panel title='Social Media' subTitle='(optional)'>
            <SocialMedia />
          </Panel>
          <Panel title='Family' subTitle='(optional)'>
            <Family />
          </Panel>
          <Panel title='History with the Military' subTitle='(optional)'>
            <Military />
          </Panel>
        </PanelGroup>
        <Flexbox layout='row' align='end center'>
          <Button label='Save Changes' raised primary />
        </Flexbox>
      </form>
    )
  }
}

export default ProfileEditor