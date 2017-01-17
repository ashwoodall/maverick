// Core
import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { includes } from 'lodash'
import moment from 'moment'

// Constants
import forms from 'core/constants/forms'

// Thirdparty
import { Avatar, Button, Checkbox, DatePicker, Dialog, FontIcon, Input, ListDivider, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Modules
import { Panel, PanelGroup } from 'components/Panel'
import UploadFile from 'components/UploadFile'

// Theme
import theme from './ProfileEditor.scss'

const { activities, kidsAge } = forms

const ProfileEditor = ({ user, expanded, limit, handleCheck, handleChange, handleExampleToggle, handlePanelChange, handleSubmit, handleToggle, handleValidation, showExample, validation }) => (
  <div data-oh-hi='profile-editor' className={ theme.profileEditor }>
    <form role='form' onSubmit={ handleSubmit }>
      <PanelGroup>
        <Panel title='Basic info' subTitle='(required section)' expanded={ expanded.basic } onClick={ () => handlePanelChange('basic', !expanded.basic) }>
          <Flexbox className={ theme.group } layout='row' align='center center'>
            <Flexbox layout='column' flex>
              <h5>Some quick information about yourself</h5>
              <p>We need some basic information to add to your profile</p>
              <br />
              <h6 className={ theme.noMargin }>Profile Picture</h6>
              <Flexbox className={ theme.upload } layout='column' align='start center'>
                { user.profile_picture && <Avatar cover className={ theme.avatar } theme={ theme } image={ user.profile_picture } /> }
                { !user.profile_picture && <Avatar className={ theme.avatar } theme={ theme } icon='camera_alt' /> }
                <UploadFile />
              </Flexbox>
              <Input
                required
                type='text'
                label='First name'
                name='firstname'
                value={ user.first_name }
                maxLength={ 35 }
                onChange={ (value) => handleChange('first_name', value) } />
              <Input
                required
                type='text'
                label='Last name'
                name='lastname'
                value={ user.last_name }
                maxLength={ 35 }
                onChange={ (value) => handleChange('last_name', value) } />
              <DatePicker
                required
                label='Birthdate'
                onChange={ (value) => handleChange('birth_date', value) }
                value={ user.birth_date }
                sundayFirstDayOfWeek
                inputFormat={(value) => `${user.birth_date.getMonth() + 1}/${user.birth_date.getDate()}/${user.birth_date.getFullYear()}`}
              />
              <Input
                required
                type='text'
                label='Hometown'
                name='hometown'
                value={ user.hometown }
                maxLength={ 50 }
                onChange={ (value) => handleChange('hometown', value) } />
            </Flexbox>
          </Flexbox>
          <Flexbox layout='column' align='center center'>
            <Button label='Next Section' flat primary onClick={ () => handlePanelChange('intro', true, true) } />
            <FontIcon value='keyboard_arrow_down' />
          </Flexbox>
        </Panel>

        <Panel id='intro' title='Introduce Yourself' subTitle='(required section)' expanded={ expanded.intro } onClick={ () => handlePanelChange('intro', !expanded.intro) }>
          <Flexbox className={ theme.group } align='center center'>
            <Flexbox layout='column' flex>
              <h5>Write a <b>quick introduction</b> of yourself to potential new friends. Here are some things you might include:</h5>
              <Flexbox layout='column' className={ theme.examples }>
                <p>What do you like to do in your free time?</p>
                <p>What are you looking for in a friend?</p>
                <p>What are some things that are most important to you?</p>
              </Flexbox>
              <Input
                required
                className={ theme.description }
                theme={ theme }
                type='text'
                value={ user.introduction }
                multiline
                label='Introduction'
                maxLength={ 1200 }
                onChange={ (value) => handleChange('introduction', value) } />
              <p>(We’ll put this introduction under your picture at the top of your profile.)</p>
              <div className={ theme.inspiration }>
                <p>Need some inspiration?</p>
                <p>Check out some <span className={ theme.link } onClick={ () => handleExampleToggle() } >example introductions.</span></p>
              </div>
              <ListDivider />
              <h5>What are the top two ways you would feel comfortable meeting up with new people?</h5>
              <Flexbox layout='row' layout-xs='column' className={ theme.options }>
                {activities.map(option => (
                  <Flexbox layout='row' flex='50' flex-sm='100' key={ option.value }>
                    <Checkbox
                      label={ option.label }
                      checked={ includes(user.activities, option.label) }
                      onChange={ () => handleCheck('activities', option.label) } />
                  </Flexbox>
                ))}
              </Flexbox>
            </Flexbox>
          </Flexbox>
          <Flexbox layout='column' align='center center'>
            <Button label='Next Section' flat primary onClick={ () => handlePanelChange('social', true, true) } />
            <FontIcon value='keyboard_arrow_down' />
          </Flexbox>
        </Panel>

        <Panel id='social' title='Social Media' subTitle='(optional)' expanded={ expanded.social } onClick={ () => handlePanelChange('social', !expanded.social) }>
          <Flexbox className={ classnames(theme.group, theme.social) } layout='row' align='center center'>
            <Flexbox layout='column' flex>
              <h5>Links to your social media pages</h5>
              <p>Sharing social media pages can help Oh-hi members get to know each other a bit before reaching out. They can be a great way to find conversation topics for those first time meetings. Feel free to include only the pages you’re comfortable sharing, or none at all.</p>
              <br />
              <p className={ theme.notice }>Oh-hi won’t post anything to your accounts or pull any information from them.</p>
              <Input
                type='url'
                label='Facebook'
                name='facebook'
                value={ user.facebook }
                error={ validation.facebook }
                onBlur={ () => handleValidation('url', 'facebook', user.facebook) }
                onChange={ (value) => handleChange('facebook', value) } />
              <Input
                type='url'
                label='Twitter'
                name='twitter'
                value={ user.twitter }
                error={ validation.twitter }
                onBlur={ () => handleValidation('url', 'twitter', user.twitter) }
                onChange={ (value) => handleChange('twitter', value) } />
              <Input
                type='url'
                label='Instagram'
                name='instagram'
                value={ user.instagram }
                error={ validation.instagram }
                onBlur={ () => handleValidation('url', 'instagram', user.instagram) }
                onChange={ (value) => handleChange('instagram', value) } />
              <Input
                type='url'
                label='Pinterest'
                name='pinterest'
                value={ user.pinterest }
                error={ validation.pinterest }
                onBlur={ () => handleValidation('url', 'pinterest', user.pinterest) }
                onChange={ (value) => handleChange('pinterest', value) } />
            </Flexbox>
          </Flexbox>
          <Flexbox layout='column' align='center center'>
            <Button label='Next Section' flat primary onClick={ () => handlePanelChange('family', true, true) } />
            <FontIcon value='keyboard_arrow_down' />
          </Flexbox>
        </Panel>

        <Panel id='family' title='Family' subTitle='(optional)' expanded={ expanded.family } onClick={ () => handlePanelChange('family', !expanded.family) }>
          <Flexbox className={ theme.group } layout='row' align='center center'>
            <Flexbox layout='column' flex>
              <h5>Pets</h5>
              <h6>Do you have any pets?</h6>
              <RadioGroup name='hasPets' value={ user.has_pets } onChange={ (value) => handleChange('has_pets', value) }>
                <RadioButton label='Yes' value='yes' />
                <RadioButton label='No' value='no' />
              </RadioGroup>
              { user.has_pets === 'yes' ? <Input type='text' label='Tell us about your pets' name='aboutPets' value={ user.about_pets } maxLength={ 500 } onChange={ (value) => handleChange('about_pets', value) } /> : <span /> }
              <br />
              <h5>Kids</h5>
              <h6>Do you have any kids?</h6>
              <RadioGroup name='hasKids' value={ user.has_kids } onChange={ (value) => handleChange('has_kids', value) }>
                <RadioButton label='Yes' value='hasKids' />
                <RadioButton label='No' value='noKids' />
                <RadioButton label='Expecting my first' value='expecting' />
              </RadioGroup>
              { user.has_kids === 'hasKids' ? (
                <div>
                  <Input type='text' label='How many kids?' name='aboutKids' value={ user.number_of_kids } onChange={ (value) => handleChange('number_of_kids', value) } />
                  <h6>What are their age ranges?</h6>
                  <Flexbox layout='row' layout-xs='column' className={ theme.options }>
                    {kidsAge.map(option => (
                      <Flexbox layout='row' flex='50' flex-sm='100' key={ option.value }>
                        <Checkbox
                          label={ option.label }
                          checked={ includes(user.kid_status, option.label) }
                          onChange={ () => handleCheck('kid_status', option.label) } />
                      </Flexbox>
                    ))}
                  </Flexbox>
                </div>
              ) : <span /> }
            </Flexbox>
          </Flexbox>
          <Flexbox layout='column' align='center center'>
            <Button label='Next Section' flat primary onClick={ () => handlePanelChange('military', true, true) } />
            <FontIcon value='keyboard_arrow_down' />
          </Flexbox>
        </Panel>

        <Panel id='military' title='History with the Military' subTitle='(optional)' expanded={ expanded.military } onClick={ () => handlePanelChange('military', !expanded.military) }>
          <Flexbox className={ theme.group } layout='row' align='center center'>
            <Flexbox layout='column' flex>
              <h6>Current Duty Station</h6>
              <h4>Fort Hood</h4>
              <br />
              <Checkbox label='I am a service member too!' checked={ user.is_service_member } onChange={ (value) => handleChange('is_service_member', value) } />
            </Flexbox>
          </Flexbox>
        </Panel>
      </PanelGroup>

      <Flexbox layout='row' align='end center'>
        { user.completed_profile && <a href={ `/person/${user.id}` }>Preview Profile</a> }
        <Button type='submit' className={ theme.button } label='Save Changes' raised primary />
      </Flexbox>

    </form>

    <Dialog
      actions={ [{ label: 'Ok', onClick: handleExampleToggle }] }
      active={ showExample }
      onEscKeyDown={ handleExampleToggle }
      onOverlayClick={ handleExampleToggle }
      title='Need some inspiration? Check out this example:'>
      <p><i>“Hi, I’m Allison! I love just hanging out, drinking wine, and watching Netflix together. I’m looking for others who understand what it’s like to be a military spouse.”</i></p>
    </Dialog>

    <Dialog
      actions={ [{ label: 'Ok', onClick: handleToggle }] }
      active={ limit }
      onEscKeyDown={ handleToggle }
      onOverlayClick={ handleToggle }
      title='Activity Limit Reached'>
      <p>Whoops, looks like you've selected too many activities. Please select only two.</p>
    </Dialog>

  </div>
)

ProfileEditor.propTypes = {
  expanded: PropTypes.object.isRequired,
  limit: PropTypes.bool.isRequired,
  handleCheck: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleExampleToggle: PropTypes.func.isRequired,
  handlePanelChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  showExample: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}

export default ProfileEditor
