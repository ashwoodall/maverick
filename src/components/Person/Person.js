// Core
import React from 'react'

// Thirdparty
import { Avatar, Card, CardText } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Theme
import theme from './Person.scss'

const Person = () => (
  <div className={ theme.person } data-oh-hi='person'>
    <Card>
      <CardText>
        <Avatar className={ theme.avatar } image='https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/p320x320/14925568_351751435169655_5558516257312023873_n.jpg?oh=22d89b90395390c2764b6d81462a1ae7&oe=58BD890C' />
        <Flexbox layout='row'>
          <h5>Brandon C.</h5>
          <p className={ theme.age }>(29)</p>
        </Flexbox>
        <p className={ theme.content }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum felis vel elit aliquam facilisis. Cras gravida massa libero eu finibus felis elementum non. Aliquam vel dui vel dui consequat volutpat. Sed ac tempor libero.</p>
      </CardText>
    </Card>
  </div>
)

export default Person
