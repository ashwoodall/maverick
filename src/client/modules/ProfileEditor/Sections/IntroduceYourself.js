import React from 'react'
import classnames from 'classnames'

// Thirdparty
import { Checkbox, Input, ListDivider } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from '../ProfileEditor.scss'

import forms from 'core/constants/forms'

const { activities } = forms

const IntroduceYourself = (props) => (
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
        {activities.map(option => (
          <Flexbox layout='row' flex='50' key={ option.name }>
            <Checkbox label={ option.label } />
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  </Flexbox>
)

export default IntroduceYourself