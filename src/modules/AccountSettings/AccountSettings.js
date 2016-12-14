// Core
import React, { PropTypes } from 'react'

// Thirdparty
import { Button } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Divider from 'components/Divider'

// Theme
import theme from './AccountSettings.scss'

const AccountSettings = ({ handleDelete, handleDisable }) => (
  <div className={ theme.accountSettings } data-oh-hi='account-settings'>
    <Flexbox layout='column'>
      <h5>Temporarily Disable My Account</h5>
      <p>You may diasble your account at any time. This allows you to remove access to your profile while keeping your Oh-hi account to be re-enabled at any time. </p>
      <Flexbox layout='row' align='end center'>
        <Button label='Disable Account' accent raised onClick={ () => handleDisable() } />
      </Flexbox>
      <Divider />
      <h5>Delete My Account</h5>
      <p>If you delete your account, all your data will be permanently deleted. This cannot be undone.</p>
      <Flexbox layout='row' align='end center'>
        <Button label='Delete Account' accent raised onClick={ () => handleDelete() } />
      </Flexbox>
    </Flexbox>
  </div>
)

AccountSettings.propTypes = {
  handleDelete: PropTypes.func,
  handleDisable: PropTypes.func
}

export default AccountSettings
