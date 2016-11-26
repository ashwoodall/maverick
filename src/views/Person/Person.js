// Core
import React, { PropTypes } from 'react'

// Components
import Container from 'components/Container'

// Modules
import PersonContainer from 'modules/Person'

const Person = ({ params }) => (
  <div data-oh-hi='person-view'>
    <Container>
      <PersonContainer { ...params } />
    </Container>
  </div>
)

Person.propTypes = {
  params: PropTypes.object
}

export default Person
