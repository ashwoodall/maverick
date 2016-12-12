// Core
import React, { PropTypes } from 'react'
import moment from 'moment'

// Thirdparty
import { Avatar, Button, FontIcon, Link, ListDivider } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Reference from 'components/Reference'
import Subheader from 'components/Subheader'

// Theme
import theme from './Person.scss'

const Person = ({ limited, person, references, startConversation }) => (
  <div className={ theme.person } data-oh-hi='person-module'>
    <Flexbox layout='column' align='start center'>
      { person.profile_picture
        ? (<Avatar className={ theme.avatar } image={ person.profile_picture } />)
        : (<Avatar className={ theme.avatar } title={ person.first_name } theme={ theme } />) }
      <h3>{ `${person.first_name} ${person.last_name}` }</h3>
      <h5>{ `${moment().diff(person.birth_date, 'years')} | ${person.current_station}`}</h5>
    </Flexbox>

    <p className={ theme.introduction }>{ person.introduction }</p>

    { limited &&
      <div>
        <Flexbox layout='row' align='center center'>
          <Flexbox layout='column' flex='30'>
            <p className={ theme.aside }>I'd like to be invited to...</p>
            { person.activities.length > 0 && person.activities.map(activity => (
              <Button key={ activity } className={ theme.button } label={ activity } raised primary onClick={ () => startConversation(activity) } />
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
          { person.has_kids === 'hasKids' && <p>{ `Kids: ${person.number_of_kids} (${person.kids_ages.toString()})`}</p> }
          { person.has_pets && <p>{ `Pets: ${person.about_pets}`}</p> }
        </Flexbox>

        <Flexbox className={ theme.section } layout='column'>
          <Subheader title='Social' />
          { person.facebook && <Link className={ theme.link } theme={ theme } href={ person.facebook } target='_blank' icon={ <i className='mdi mdi-facebook' /> } label='Facebook' /> }
          { person.twitter && <Link className={ theme.link } theme={ theme } href={ person.twitter } target='_blank'icon={ <i className='mdi mdi-twitter' /> } label='Twitter' /> }
          { person.instagram && <Link className={ theme.link } theme={ theme } href={ person.instagram } target='_blank' icon={ <i className='mdi mdi-instagram' /> } label='Instagram' /> }
          { person.pinterest && <Link className={ theme.link } theme={ theme } href={ person.pinterest } target='_blank' icon={ <i className='mdi mdi-pinterest' /> } label='Pinterest' /> }
        </Flexbox>

        <Flexbox className={ theme.section } layout='column'>
          <Subheader title={ `Friend References (${references.length})` } />
          { references.length > 0 &&
            <Flexbox layout='column'>
              { references.map(reference => (
                <Reference key={ `reference_${reference.id}` } reference={ reference } />
              ))}
            </Flexbox>
          }
          { references.length === 0 &&
            <Flexbox className={ theme.content } layout='column' align='center center'>
              <FontIcon className={ theme.icon } value='mood_bad' />
              <h4>No Published Friend References</h4>
            </Flexbox>
          }
        </Flexbox>

        <Flexbox className={ theme.section } layout='column'>
          <ListDivider />
          <br />
          <h6>Do you know { person.first_name }?</h6>
          <a href={ `/reference/${person.id}` }>Leave { person.first_name } an Oh-hi reference!</a>
        </Flexbox>
      </div>
    }
    { !limited &&
      <Flexbox layout='row' flex align='center center'>
        <h5>Please complete user profile to see more information</h5>
      </Flexbox>
    }
  </div>
)

Person.propTypes = {
  limited: PropTypes.bool.isRequired,
  person: PropTypes.object.isRequired,
  references: PropTypes.array.isRequired,
  startConversation: PropTypes.func.isRequired
}

export default Person
