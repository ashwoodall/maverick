// Core
import React, { PropTypes } from 'react'

// Thridparty
import { Button, FontIcon, ListDivider, Tab, Tabs } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Reference from 'components/Reference'

// Theme
import theme from './References.scss'

const References = ({ index, handleSubmit, handleTabChange, published, unpublished, userId }) => (
  <div className={ theme.references } data-oh-hi='references'>
    <h5>Your friend references</h5>
    <Flexbox layout='column'>
      <Tabs index={ index } onChange={ handleTabChange }>
        <Tab label={ `Published (${published.length})` }>
          { published.length > 0 &&
            <Flexbox className={ theme.content } layout='column'>
              { published.map(reference => (
                <Reference key={ `reference_${reference.id}` } reference={ reference }>
                  <Button label='Unpublish' raised onClick={ () => handleSubmit('unpublish', reference.id) } />
                </Reference>
              ))}
            </Flexbox>
          }
          { published.length === 0 &&
            <Flexbox className={ theme.content } layout='column' align='center center'>
              <FontIcon className={ theme.icon } value='mood_bad' />
              <h4>No Published Friend References</h4>
            </Flexbox>
          }
        </Tab>
        <Tab className={ theme.tab } label={ `Unpublished (${unpublished.length})` }>
          { unpublished.length > 0 &&
            <Flexbox className={ theme.content } layout='column'>
              { unpublished.map(reference => (
                <Reference key={ `reference_${reference.id}` } reference={ reference }>
                  <Button label='Publish' raised primary onClick={ () => handleSubmit('publish', reference.id) } />
                </Reference>
              ))}
            </Flexbox>
          }
          { unpublished.length === 0 &&
            <Flexbox className={ theme.content } layout='column' align='center center'>
              <h4>No Unpublished Friend References</h4>
            </Flexbox>
          }
        </Tab>
      </Tabs>
      <ListDivider />
      <h6>To ask your friends for an Oh-hi reference, just send them your reference link:</h6>
      <a href={ `/reference/${userId}` }>http://www.app.oh-hi.us/reference/{userId}</a>
    </Flexbox>
  </div>
)

References.propTypes = {
  index: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  published: PropTypes.array.isRequired,
  unpublished: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired
}

export default References
