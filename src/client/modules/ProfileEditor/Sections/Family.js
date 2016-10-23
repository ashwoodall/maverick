import React from 'react'
import classnames from 'classnames'

// Thirdparty
import { Checkbox, Input, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from '../ProfileEditor.scss'

import forms from 'core/constants/forms'

const { kidsAge } = forms

const BasicInfo = (props) => (
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
        {kidsAge.map(option => (
          <Flexbox layout='row' flex='50'>
            <Checkbox label={ option.label } />
          </Flexbox>
        ))}
      </Flexbox>
    </Flexbox>
  </Flexbox>
)

export default BasicInfo