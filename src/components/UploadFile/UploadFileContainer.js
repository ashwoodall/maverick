// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Modules
import UploadFile from './UploadFile'

// Actions
import Actions from './UploadFileActions'

class UploadFileContainer extends Component {
  state = { file: {}, showDropzone: false }

  handleDrop = (file, reject) => {
    this.setState({ file: file[0] })
  }

  handleSubmmit = () => {
    this.props.getCredentials(this.state.file).then(response => {
      const { payload: { data } } = response
      
      this.props.uploadFile(this.state.file, data.signedRequest, data.url)
    })

    this.setState({ showDropzone: false })
  }

  handleToggle = () => {
    this.setState({ showDropzone: !this.state.showDropzone })
  }

  render () {
    return ( 
      <UploadFile 
        handleDrop={ this.handleDrop } 
        handleSubmmit={ this.handleSubmmit } 
        handleToggle={ this.handleToggle } 
        showDropzone={ this.state.showDropzone } />
    )
  }
}

export default connect(null, Actions)(UploadFileContainer)