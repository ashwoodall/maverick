// Core
import React from 'react'

// Thridparty
import { Avatar, Button, Dialog, FontIcon } from 'react-toolbox'
import Dropzone from 'react-dropzone'
import Flexbox from 'react-material-flexbox'

const styles = {
  alignItems: 'center',
  border: '1px solid #EEEEEE',
  cursor: 'pointer',
  display: 'flex',
  height: '150px',
  justifyContent: 'center',
  overflow: 'hidden',
  width: '100%'
}

const UploadImage = ({ file, handleDrop, handleSubmmit, handleToggle, showDropzone }) => (
  <div data-oh-hi='upload-file'>
    <Button label='Change Picture' primary onClick={ () => handleToggle() } />
    <Dialog
      actions={ [{ label: 'Cancel', onClick: handleToggle }, { label: 'Upload', disabled: file.name ? false : true, onClick: handleSubmmit }] }
      active={ showDropzone }
      onEscKeyDown={ handleToggle }
      onOverlayClick={ handleToggle }
      title='Upload Profile Picture'>
        <Dropzone style={ styles } accept='image/*' multiple={ false } onDrop={ handleDrop }>
          { !file.name &&
            <Flexbox layout='column' align='center center'>
              <FontIcon value='photo_library' />
              <Button label='Click here to select picture' /> 
            </Flexbox>
          }
          { file.name && 
            <Flexbox layout='column' align='center center'>
              <Avatar cover image={ file.preview } />
              <p>{ file.name }</p>
            </Flexbox>
          }
        </Dropzone>
    </Dialog>
  </div>
)

export default UploadImage