// Core
import React from 'react'

// Thirdparty
import { GridList, GridTile } from 'components/GridList'
import Person from 'components/Person'

const PeopleList = () => (
  <div data-oh-hi='people-list'>
    <GridList>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
      <GridTile columns={ 2 }>
        <Person />
      </GridTile>
    </GridList>
  </div>
)

export default PeopleList
