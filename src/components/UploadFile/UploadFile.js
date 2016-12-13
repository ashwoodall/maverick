// Core
import React from 'react'

// Thridparty
import { Dialog, IconButton } from 'react-toolbox'
import Dropzone from 'react-dropzone'

const UploadImage = ({ handleDrop, handleSubmmit, handleToggle, showDropzone }) => (
  <div data-oh-hi='upload-file'>
    <IconButton icon='file_upload' onClick={ () => handleToggle() } />
    <Dialog
      actions={ [{ label: 'Cancel', onClick: handleToggle }, { label: 'Upload', onClick: handleSubmmit }] }
      active={ showDropzone }
      onEscKeyDown={ handleToggle }
      onOverlayClick={ handleToggle }
      title='Upload Profile Picture'>
        <Dropzone accept='image/*' multiple={ false } onDrop={ handleDrop }>
          <div>Drag file here, or click to select files to upload.</div>
        </Dropzone>
    </Dialog>
  </div>
)

export default UploadImage