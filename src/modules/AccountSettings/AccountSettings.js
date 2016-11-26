// Core
import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Thirdparty
import { Avatar, Button, Checkbox, DatePicker, FontIcon, IconButton, Input, ListDivider, RadioGroup, RadioButton } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'

// Components
import Divider from 'components/Divider'

// Modules
import { Panel, PanelGroup } from 'components/Panel'
import theme from './AccountSettings.scss'

const AccountSettings = ({ user, expanded, handleCheck, handleChange, handlePanelChange, handleSubmit }) => (
  <div className={ theme }>
    <Flexbox layout='column'>
      <h4>Temporarily Disable My Account</h4>
      <p>You may diasble your account at any time. This allows you to remove access to your profile while keeping your Oh-hi account to be re-enabled at any time. </p>
       <Flexbox layout='row' align='end center'>
        <Button label='Disable Account' raised secondary onClick={ () => handleSubmit() } />
       </Flexbox>
      <br /> 
      <Divider />
      <h4>Delete My Account</h4>
      <p>If you delete your account, all your data will be permanently deleted. This cannot be undone.</p>
      <Flexbox layout='row' align='end center'>
        <Button label='Delete Account' raised secondary onClick={ () => handleSubmit() } />
      </Flexbox>
    </Flexbox>
 </div>
)

export default AccountSettings