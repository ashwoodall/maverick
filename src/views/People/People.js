// Core
import React from 'react'

// Components
import Container from 'components/Container'
import Subheader from 'components/Subheader'

// Modules
import PeopleList from 'modules/PeopleList'

const People = () => (
  <div data-oh-hi='people-view'>
    <Container>
      <Subheader title='Fort Hood' />
      <PeopleList />
    </Container>
  </div>
)

export default People
