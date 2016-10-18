// Core 
import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

// Thirdparty
import { Avatar, Button, Checkbox, FontIcon, Input, ListDivider, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import { Panel, PanelGroup } from 'modules/Panel'

import theme from './ProfileEditor.scss'

// These need to go somewhere else!
const options = ['Go for a walk', 'Grab coffee or a drink', 'Grab lunch or dinner', 'Work out together', 'Go shopping together', 'Go to a party', 'Play date with the kids', 'Play date with the dogs', 'Volunteering', 'Attend a community event']
const childOptions = ['Infant', 'Middle School', 'Toddler', 'High School', 'Pre-K', 'College', 'Elementary School', 'Adult']

class ProfileEditor extends Component {
  render () {
    return (
      <form>
        <PanelGroup>
          <Panel title='Basic info' subTitle='(required section)' expanded>
            <Flexbox className={ classnames(theme.group, theme.basic) } flex='70' flex-sm='100' flex-xs='100' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Some quick information about yourself</h5>
                <p>We need some basic information to add to your profile</p>
                <Avatar className={ theme.avatar } theme={ theme } icon='camera_alt' />
                <Input type='text' label='First name' name='firstname' />
                <Input type='text' label='Last name' name='lastname' />
                <Input className={ theme.first } type='text' label='Age' name='age' />
                <Input type='text' label='Hometown' name='hometown' />
              </Flexbox>
            </Flexbox>
          </Panel>
          <Panel title='Introduce Yourself' subTitle='(required section)'>
            <Flexbox className={ classnames(theme.group, theme.intro) } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Write a <b>quick introduction</b> of yourself to potential new friends. Here are some things you might include:</h5>
                <Flexbox layout='column' className={ theme.examples }>
                  <span>What do you like to do in your free time?</span>
                  <span>What are you looking for in a friend?</span>
                  <span>What are some things that are most important to you?</span>
                </Flexbox>
                <Input className={ theme.description } theme={ theme } type='text' multiline label='Description' maxLength={140} />
                <p>(We’ll put this introduction under your picture at the top of your profile.)</p>
                <div className={ theme.inspiration }>
                  <p>Need some inspiration?</p>
                  <p>Check out some <a href="/">example introductions.</a></p>
                </div>
                <ListDivider />
                <h5>What are the top two ways you would feel comfortable meeting up with new people?</h5>
                <Flexbox layout='row' className={ theme.options }>
                  {options.map(option => (
                  	<Flexbox layout='row' flex='50'>
                  		<Checkbox label={ option } />
                  	</Flexbox>
                  ))}
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Panel>
          <Panel title='Social Media' subTitle='(optional)'>
            <Flexbox className={ classnames(theme.group, theme.social) } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Links to your social media pages</h5>
                <p>Sharing social media pages can help Oh-hi members get to know each other a bit before reaching out. They can be a great way to find conversation topics for those first time meetings. Feel free to include only the pages you’re comfortable sharing, or none at all.</p>
                <br/>
                <p className={ theme.notice }>Oh-hi won’t post anything to your accounts or pull any information from them.</p>
                <Input type='text' label='Facebook' name='facebook' />
                <Input type='text' label='Twitter' name='twitter' />
                <Input type='text' label='Instagram' name='instagram' />
                <Input type='text' label='Pinterest' name='pinterest' />
              </Flexbox>
            </Flexbox>
          </Panel>
          <Panel title='Family' subTitle='(optional)'>
            <Flexbox className={ theme.group } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h5>Pets</h5>
                <h6>Do you have any pets?</h6>
                <RadioGroup name='pets'>
                  <RadioButton label='Yes' value='yes' />
                  <RadioButton label='No' value='no' />
                </RadioGroup>
                <Input type='text' label='Tell us about your pets' name='aboutPets' />
                <h5>Kids</h5>
                <h6>Do you have any kids?</h6>
                <RadioGroup name='kids'>
                  <RadioButton label='Yes' value='yes' />
                  <RadioButton label='No' value='no' />
                  <RadioButton label='Expection my first' value='expecting' />
                </RadioGroup>
                <Input type='text' label='How many kids?' name='aboutKids' />
                <h6>What are their age ranges?</h6>
                <Flexbox layout='row' className={ theme.options }>
                  {childOptions.map(option => (
                  	<Flexbox layout='row' flex='50'>
                  		<Checkbox label={ option } />
                  	</Flexbox>
                  ))}
                </Flexbox>
              </Flexbox>
            </Flexbox>
          </Panel>
          <Panel title='History with the Military' subTitle='(optional)'>
            <Flexbox className={ theme.group } flex='70' layout='row' align='center center'>
              <Flexbox layout='column' flex>
                <h6>Current Duty Station</h6>
                <h4>Fort Hood</h4>
                <p>Recent or upcoming PCS? <a href="/">Change current duty station</a></p>
                <br/>
                <Input type='text' label='How many years has your siginficant other been in the military?' name='so' />
                <Checkbox label='I am a service member too!' />
              </Flexbox>
            </Flexbox>
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