// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Avatar, Button, Dialog } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Divider from 'components/Divider'

// Theme
import theme from './AccountSettings.scss'

const AccountSettings = ({ active, disabled, handleEnable, handleDelete, handleDisable, handleToggle, user }) => (
  <div className={ theme.accountSettings } data-oh-hi='account-settings'>
    <Flexbox layout='column'>
      { !disabled &&
        <div>
          <h5>Temporarily Disable My Account</h5>
          <p>All your profile information and messages will be stored so you can re-enable your account anytime.</p>
          <Flexbox layout='row' align='end center'>
            <Button label='Disable Account' accent raised onClick={ () => handleToggle() } />
          </Flexbox>
        </div>
      }
      { disabled &&
        <div>
          <h5>Enable My Account</h5>
          <p>You disabled your account. All your profile information and messages have been stored. You may re-enable your profile anytime. </p>
          <Flexbox layout='row' align='end center'>
            <Button label='Enable Account' primary raised onClick={ () => handleEnable() } />
          </Flexbox>
        </div>
      }
      <Divider />
      <br />
      <h5>Delete My Account</h5>
      <p>If you delete your account, all your data will be permanently deleted. This cannot be undone.</p>
      <Flexbox layout='row' align='end center'>
        <Button label='Delete Account' raised onClick={ () => handleDelete() } />
      </Flexbox>
    </Flexbox>
    <Dialog
      actions={ [{ label: 'Cancel', onClick: handleToggle }, { label: 'Disable Account', onClick: handleDisable }] }
      active={ active }
      onEscKeyDown={ handleToggle} 
      onOverlayClick={ handleToggle }>
      <Flexbox layout='column' align='center center'>
        { user.profile_picture && <Avatar cover image={ user.profile_picture } /> }
        { !user.profile_picture && <Avatar icon='camera_alt' /> }
        <h4>Temporarily disable your account?</h4>
        <p>No one will be able to view your profile while your account is disabled. You may re-enable your account anytime.</p>
      </Flexbox>
    </Dialog>
  </div>
)

AccountSettings.propTypes = {
  handleDelete: PropTypes.func,
  handleDisable: PropTypes.func
}

export default AccountSettings
