import React, { Component } from 'react'
import classnames from 'classnames'

// Thirdparty
import { Avatar, Button, IconButton, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from '../ProfileEditor.scss'

class BasicInfo extends Component {
  state = {
    firstname: '',
    lastname: '',
    avatar: '',
    age: '',
    hometown: ''
  }

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  }

  render () {
    return (
      <div data-oh-hi='basic-info'>
        <Flexbox className={ classnames(theme.group, theme.basic) } flex='70' flex-sm='100' flex-xs='100' layout='row' align='center center'>
          <Flexbox layout='column' flex>
            <h5>Some quick information about yourself</h5>
            <p>We need some basic information to add to your profile</p>
            <Flexbox layout='row' align='start center'>
              <h6>Profile Picture</h6>
              <div>
                <label for="profile-picture">
                  <IconButton icon='edit' />
                </label>
              </div>
            </Flexbox>
            <Avatar className={ theme.avatar } theme={ theme } icon='camera_alt' />
            <Input type='text' label='First name' name='firstname' value={ this.state.firstname } onChange={ this.handleChange.bind(this, 'firstname') } />
            <Input type='text' label='Last name' name='lastname' value={ this.state.lastname } onChange={ this.handleChange.bind(this, 'lastname') } />
            <Input type='number' label='Age' name='age' value={ this.state.age } onChange={ this.handleChange.bind(this, 'age') } />
            <Input type='text' label='Hometown' name='hometown' value={ this.state.hometown } onChange={ this.handleChange.bind(this, 'hometown') } />
          </Flexbox>
        </Flexbox>
        <Flexbox layout='row' align='end center'>
          <Button label='Continue' flat primary />
        </Flexbox>
      </div>
    )
  }
}


export default BasicInfo