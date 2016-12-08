// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Avatar, Card, CardText } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Person.scss'

const Person = ({ data, onClick }) => (
  <div className={ theme.person } data-oh-hi='person' onClick={ () => onClick(data.id) }>
    <Card className={ theme.card }>
      <CardText>
        <Flexbox layout='column' align='center center'>
          { data.profile_picture
              ? (<Avatar className={ theme.avatar } image={ data.profile_picture } />)
              : (<Avatar className={ theme.avatar } title={ data.first_name } theme={ theme } />) }
          <Flexbox layout='row'>
            <h5>{ `${data.first_name} ${data.last_name.charAt(0)}.` }</h5>
          </Flexbox>
          <p className={ theme.content }>{ data.introduction }</p>
        </Flexbox>
      </CardText>
    </Card>
  </div>
)

Person.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Person
