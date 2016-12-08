// Core
import React, { PropTypes } from 'react'
import moment from 'moment'

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
      <h5>{ `${moment().diff(person.birth_date, 'years')} | ${person.current_station}`}</h5>
    </Flexbox>

    <p className={ theme.introduction }>{ person.introduction }</p>

    <Flexbox layout='row' align='center center'>
      <Flexbox layout='column' flex='30'>
        <p className={ theme.aside }>I'd like to be invited to...</p>
        { person.activities.length > 0 && person.activities.map(activity => (
          <Button key={ activity } className={ theme.button } label={ activity} raised primary onClick={ () => startConversation(activity) } />
        ))}
        <Button className={ theme.button } label='A Conversation' raised primary onClick={ () => startConversation() } />
      </Flexbox>
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='About me' />
      <p>{ `Hometown: ${person.hometown}`}</p>
      { person.is_service_member && <p>Currently Serving</p> }
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Family' />
      { person.has_kids == 'hasKids' && <p>{ `Kids: ${person.number_of_kids} (${person.kids_ages.toString()})`}</p> }
      { person.has_pets && <p>{ `Pets: ${person.about_pets}`}</p> }
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Social' />
      { person.facebook && <Link className={ theme.link } theme={ theme } href={ person.facebook } target='_blank' icon={ <i className='mdi mdi-facebook'></i> } label='Facebook' /> }
      { person.twitter && <Link className={ theme.link } theme={ theme } href={ person.twitter } target='_blank'icon={ <i className='mdi mdi-twitter'></i> } label='Twitter' /> }
      { person.instagram && <Link className={ theme.link } theme={ theme } href={ person.instagram } target='_blank' icon={ <i className='mdi mdi-instagram'></i> } label='Instagram' /> }
      { person.pinterest && <Link className={ theme.link } theme={ theme } href={ person.pinterest } target='_blank' icon={ <i className='mdi mdi-pinterest'></i> } label='Pinterest' /> }
    </Flexbox>

    <Flexbox className={ theme.section } layout='column'>
      <Subheader title='Friend References' />
    </Flexbox>

  </div>
)

Person.propTypes = {
  person: PropTypes.object.isRequired,
  startConversation: PropTypes.func.isRequired
}

export default Person
