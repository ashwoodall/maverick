// Core
import React from 'react'

// Thridparty
import { Dialog, IconButton } from 'react-toolbox'
import Dropzone from 'react-dropzone'

const UploadImage = ({ file, handleDrop, handleSubmmit, handleToggle, showDropzone }) => (
  <div data-oh-hi='upload-file'>
    <IconButton icon='file_upload' onClick={ () => handleToggle() } />
    <Dialog
      actions={ [{ label: 'Cancel', onClick: handleToggle }, { label: 'Upload', onClick: handleSubmmit }] }
      active={ showDropzone }
      onEscKeyDown={ handleToggle }
      onOverlayClick={ handleToggle }
      title='Upload Profile Picture'>
        <Dropzone style={{ alignItems: 'center', border: 'none', display: 'flex', flexDirection: 'column', height: '150px', justifyContent: 'center', overflow: 'hidden', width: '100%' }} accept='image/*' multiple={ false } onDrop={ handleDrop }>
          <div>Drag image here, or click to select images to upload.</div>
          <p>{ file.name }</p>
        </Dropzone>
    </Dialog>
  </div>
)

export default UploadImage