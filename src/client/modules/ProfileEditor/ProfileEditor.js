// Core 
import React, { Component, PropTypes } from 'react'
import update from 'react-addons-update'
import classnames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Constants
import forms from 'core/constants/forms'

// Thirdparty
import { Avatar, Button, Checkbox, FontIcon, IconButton, Input, ListDivider, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import { Panel, PanelGroup } from 'modules/Panel'
import * as Actions from './ProfileEditorActions'
import theme from './ProfileEditor.scss'

const { activities, kidsAge } = forms

class ProfileEditor extends Component {
  state = { 
    expanded: {
      basic: true,
      intro: false,
      social: false,
      family: false,
      military: false
    },
    firstname: '',
    lastname: '',
    avatar: '',
    age: '',
    hometown: '',
    description: '',
    activities: {},
    facebook: '',
    twitter: '',
    instagram: '',
    pinterest: '',
    hasPets: 'no',
    aboutPets: '',
    hasKids: 'no',
    aboutKids: '',
    ageRanges: {}
  }

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value })
  }

  handlePanelChange = (name, value) => {
    const newState = update(this.state, { expanded: { $merge: { [name]: value }}})

    this.setState(newState)
  }

  handleCheck = (key, field, value) => {
    const newState = update(this.state, { [key]: { $merge: { [field]: value }}})

    this.setState(newState)
  }

  handleSubmit = () => {
    const { save } = this.props

    save({...this.state})
  }

  render () {
    const { save } = this.props

    return (
      <div data-oh-hi='profile-editor'>
        <PanelGroup>

          <Panel title='Basic info' subTitle='(required section)' expanded={ this.state.expanded.basic } onClick={ () => this.handlePanelChange('basic', !this.state.expanded.basic) }>
            <Flexbox className={ theme.group } flex='70' flex-sm='100' flex-xs='100' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Some quick information about yourself</h5>
                <p>We need some basic information to add to your profile</p>
                <br/>
                <Flexbox layout='row' align='start center'>
                  <h6>Profile Picture</h6>
                  <IconButton icon='edit' />
                </Flexbox>
                <Avatar className={ theme.avatar } theme={ theme } icon='camera_alt' />
                <Input type='text' label='First name' name='firstname' value={ this.state.firstname } onChange={ this.handleChange.bind(this, 'firstname') } />
                <Input type='text' label='Last name' name='lastname' value={ this.state.lastname } onChange={ this.handleChange.bind(this, 'lastname') } />
                <Input type='number' label='Age' name='age' value={ this.state.age } onChange={ this.handleChange.bind(this, 'age') } />
                <Input type='text' label='Hometown' name='hometown' value={ this.state.hometown } onChange={ this.handleChange.bind(this, 'hometown') } />
              </Flexbox>
            </Flexbox>
            <Flexbox layout='column' align='center center'>
              <Button label='Next Section' flat primary onClick={ () => this.handlePanelChange('intro', true) } />
              <FontIcon value='keyboard_arrow_down' />
            </Flexbox>
          </Panel>

          <Panel title='Introduce Yourself' subTitle='(required section)' expanded={ this.state.expanded.intro } onClick={ () => this.handlePanelChange('intro', !this.state.expanded.intro) }>
            <Flexbox className={ theme.group } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Write a <b>quick introduction</b> of yourself to potential new friends. Here are some things you might include:</h5>
                <Flexbox layout='column' className={ theme.examples }>
                  <p>What do you like to do in your free time?</p>
                  <p>What are you looking for in a friend?</p>
                  <p>What are some things that are most important to you?</p>
                </Flexbox>
                <Input className={ theme.description } theme={ theme } type='text' value={ this.state.description } multiline label='Description' maxLength={140} onChange={ this.handleChange.bind(this, 'description') } />
                <p>(We’ll put this introduction under your picture at the top of your profile.)</p>
                <div className={ theme.inspiration }>
                  <p>Need some inspiration?</p>
                  <p>Check out some <a href="/">example introductions.</a></p>
                </div>
                <ListDivider />
                <h5>What are the top two ways you would feel comfortable meeting up with new people?</h5>
                <Flexbox layout='row' className={ theme.options }>
                  {activities.map(option => (
                    <Flexbox layout='row' flex='50' flex-sm='100' key={ option.value }>
                      <Checkbox label={ option.label } checked={ this.state.activities[option.value] } onChange={ this.handleCheck.bind(this, 'activities', option.value) } />
                    </Flexbox>
                  ))}
                </Flexbox>
              </Flexbox>
            </Flexbox>
            <Flexbox layout='column' align='center center'>
              <Button label='Next Section' flat primary onClick={ () => this.handlePanelChange('social', true) } />
              <FontIcon value='keyboard_arrow_down' />
            </Flexbox>
          </Panel>

          <Panel title='Social Media' subTitle='(optional)' expanded={ this.state.expanded.social } onClick={ () => this.handlePanelChange('social', !this.state.expanded.social) }>
            <Flexbox className={ classnames(theme.group, theme.social) } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Links to your social media pages</h5>
                <p>Sharing social media pages can help Oh-hi members get to know each other a bit before reaching out. They can be a great way to find conversation topics for those first time meetings. Feel free to include only the pages you’re comfortable sharing, or none at all.</p>
                <br/>
                <p className={ theme.notice }>Oh-hi won’t post anything to your accounts or pull any information from them.</p>
                <Input type='text' label='Facebook' name='facebook' value={ this.state.facebook } onChange={ this.handleChange.bind(this, 'facebook') } />
                <Input type='text' label='Twitter' name='twitter' value={ this.state.twitter } onChange={ this.handleChange.bind(this, 'twitter') } />
                <Input type='text' label='Instagram' name='instagram' value={ this.state.instagram } onChange={ this.handleChange.bind(this, 'instagram') } />
                <Input type='text' label='Pinterest' name='pinterest' value={ this.state.pinterest } onChange={ this.handleChange.bind(this, 'pinterest') } />
              </Flexbox>
            </Flexbox>
            <Flexbox layout='column' align='center center'>
              <Button label='Next Section' flat primary onClick={ () => this.handlePanelChange('family', true) } />
              <FontIcon value='keyboard_arrow_down' />
            </Flexbox>
          </Panel>

          <Panel title='Family' subTitle='(optional)' expanded={ this.state.expanded.family } onClick={ () => this.handlePanelChange('family', !this.state.expanded.family) }>
            <Flexbox className={ theme.group } flex='70' flex-sm='90' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Pets</h5>
                <h6>Do you have any pets?</h6>
                <RadioGroup name='hasPets' value={ this.state.hasPets } onChange={ this.handleChange.bind(this, 'hasPets') }>
                  <RadioButton label='Yes' value='yes' />
                  <RadioButton label='No' value='no' />
                </RadioGroup>
                { this.state.hasPets === 'yes' ? <Input type='text' label='Tell us about your pets' name='aboutPets' value={ this.state.aboutPets } onChange={ this.handleChange.bind(this, 'aboutPets') } /> : <span/> }
                <br/>
                <h5>Kids</h5>
                <h6>Do you have any kids?</h6>
                <RadioGroup name='hasKids' value={ this.state.hasKids } onChange={ this.handleChange.bind(this, 'hasKids') }>
                  <RadioButton label='Yes' value='yes' />
                  <RadioButton label='No' value='no' />
                  <RadioButton label='Expection my first' value='expecting' />
                </RadioGroup>
                { this.state.hasKids === 'yes' ? (
                  <div>
                    <Input type='text' label='How many kids?' name='aboutKids' value={ this.state.aboutKids } onChange={ this.handleChange.bind(this, 'aboutKids') } />
                    <h6>What are their age ranges?</h6>
                    <Flexbox layout='row' className={ theme.options }>
                      {kidsAge.map(option => (
                        <Flexbox layout='row' flex='50' flex-sm='100' key={ option.value }>
                          <Checkbox label={ option.label } checked={ this.state.ageRanges[option.value] } onChange={ this.handleCheck.bind(this, 'ageRanges', option.value) } />
                        </Flexbox>
                      ))}
                    </Flexbox>
                  </div> 
                ) : <span/> }
              </Flexbox>
            </Flexbox>
            <Flexbox layout='column' align='center center'>
              <Button label='Next Section' flat primary onClick={ () => this.handlePanelChange('military', true) } />
              <FontIcon value='keyboard_arrow_down' />
            </Flexbox>
          </Panel>

          <Panel title='History with the Military' subTitle='(optional)' expanded={ this.state.expanded.military } onClick={ () => this.handlePanelChange('military', !this.state.expanded.military) }>
            <Flexbox className={ theme.group } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h6>Current Duty Station</h6>
                <h4>Fort Hood</h4>
                <Checkbox label='I am a service member too!' checked={ this.state.isServiceMember } onChange={ this.handleChange.bind(this, 'isServiceMember') } />
              </Flexbox>
            </Flexbox>
          </Panel>
        </PanelGroup>

        <Flexbox layout='row' align='end center'>
          <Button label='Save Changes' raised primary onClick={ () => this.handleSubmit() } />
        </Flexbox>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProfileEditor)