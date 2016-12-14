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
      const xhr = new XMLHttpRequest()

      xhr.open('PUT', data.signedRequest)
      xhr.setRequestHeader('Content-type', this.state.file.type)
      xhr.setRequestHeader('x-amz-acl', 'public-read')
      xhr.send(this.state.file)
      xhr.onload = () => {
        if (xhr.status === 200) {
          this.props.setFile(data.url)
          this.setState({ showDropzone: false })
        }
      }
      xhr.onerror = () => {
        alert('File could not be uploaded')
      }
    })
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