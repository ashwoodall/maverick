// Core
import React, { Component } from 'react'
import classnames from 'classnames'

// Thirdparty
import { IconButton, Input } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

import theme from './Search.scss'

class Search extends Component {
  state = { show: false }

  handleIconClick = () => {
    this.setState({ show: !this.state.show })
  }

  render () {
    return (
      <div className={ theme.search } data-oh-hi='search'>
        <Flexbox layout='row' align='start center'>
          <IconButton className={ theme.icon } icon='search' onClick={ () => this.handleIconClick() } />
          <Input className={ this.state.show ? classnames(theme.input, theme.show) : theme.input } type='text' label='Search' floating={ false } />
        </Flexbox>
      </div>
    )
  }
}

export default Search
