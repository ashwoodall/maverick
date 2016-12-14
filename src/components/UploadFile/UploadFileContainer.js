// Core
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

// Modules
import UploadFile from './UploadFile'

// Actions
import Actions from './UploadFileActions'

const validate = (file) => {
  let limit = 26214400
  
  if (file.size > limit) {
    return false
  } else {
    return true
  }
}

class UploadFileContainer extends Component {
  state = { file: {}, showDropzone: false }

  handleDrop = (file, reject) => {
    if (reject.length > 0) {
      alert('This is not a valid image file')
    } else {
      this.setState({ file: file[0] })
    }
  }

  handleSubmmit = () => {
    const { file } = this.state

    if (isEmpty(file)) {
      alert('No image select, please select an image')

      return this.setState({ file: {} })
    }

    let isValid = validate(file) 

    if (isValid) {
      this.props.getCredentials(file).then(response => {
        const { payload: { data } } = response
        const xhr = new XMLHttpRequest()

        xhr.open('PUT', data.signedRequest)
        xhr.setRequestHeader('Content-type', file.type)
        xhr.setRequestHeader('x-amz-acl', 'public-read')
        xhr.send(file)
        xhr.onload = () => {
          if (xhr.status === 200) {
            this.props.setFile(data.url)

            return this.setState({ file: {}, showDropzone: false })
          }
        }
        xhr.onerror = () => {
          alert('Image could not be uploaded')

          return this.setState({ file: {} })
        }
      })
    } else {
      alert('Image too large, please select another file')
    }
  }

  handleToggle = () => {
    this.setState({ file: {}, showDropzone: !this.state.showDropzone })
  }

  render () {
    return ( 
      <UploadFile
        file={ this.state.file }
        handleDrop={ this.handleDrop } 
        handleSubmmit={ this.handleSubmmit } 
        handleToggle={ this.handleToggle } 
        showDropzone={ this.state.showDropzone } />
    )
  }
}

export default connect(null, Actions)(UploadFileContainer)