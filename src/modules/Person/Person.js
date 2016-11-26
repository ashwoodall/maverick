// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Avatar, Button, Link } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Subheader from 'components/Subheader'

// Theme
import theme from './Person.scss'

const Person = ({ person, startConversation }) => (
  <div className={ theme.person } data-oh-hi='person-module'>
    <Flexbox layout='column' align='start center'>
      { person.profile_picture
        ? (<Avatar className={ theme.avatar } image={ person.profile_picture } />)
        : (<Avatar className={ theme.avatar } title={ person.first_name } theme={ theme } />) }
      <h3>{ `${person.first_name} ${person.last_name}` }</h3>
      <h5>{ `${person.age} | ${person.current_station}`}</h5>
    </Flexbox>

    <p className={ theme.introduction }>{ person.introduction }</p>

    <Flexbox layout='row' align='center center'>
      <Flexbox layout='column' flex='30'>
        <p className={ theme.aside }>I'd like to be invited to...</p>
        <Button className={ theme.button } label='Activity one' raised primary />
        <Button className={ theme.button } label='Activity two' raised primary />
        <Button className={ theme.button } label='A Conversation' raised primary onClick={ () => startConversation() } />
      </Flexbox>
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='About me' />
      <p>{ `Hometown: ${person.hometown}`}</p>
      <p>{ `Currently Serving: ${person.is_service_member}`}</p>
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Family' />
      { person.has_kids && <p>{ `Kids: ${person.number_of_kids} (${person.kids_ages.toString()})`}</p> }
      { person.has_pets && <p>{ `Pets: ${person.about_pets}`}</p> }
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Social' />
      { person.facebook && <Link href={ person.facebook } icon='facebook' label='Facebook' /> }
      { person.twitter && <Link href={ person.twitter } icon='twitter' label='Twitter' /> }
      { person.instagram && <Link href={ person.instagram } icon='instagram' label='Instagram' /> }
      { person.pinterest && <Link href={ person.pinterest } icon='pinterest' label='Pinterest' /> }
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Friend References' />
    </Flexbox>

  </div>
)

Person.propTypes = {
  person: PropTypes.object.isRequired
}

export default Person
