// Core
import React, { PropTypes } from 'react'
import { map } from 'lodash'

// Thirdparty
import { GridList, GridTile } from 'components/GridList'
import Person from 'components/Person'

const PeopleList = ({ people, onClick }) => (
  <div data-oh-hi='people-list'>
    <GridList>
      {map(people, item => {
        if (item.first_name) return <GridTile key={ `person_${item.id}` } columns={ 2 }><Person data={ item } onClick={ onClick } /></GridTile>
      })}
    </GridList>
  </div>
)

PeopleList.propTypes = {
  onClick: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired
}

export default PeopleList
