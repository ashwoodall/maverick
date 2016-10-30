import React, { Component } from 'react'
import { Button, Snackbar, FontIcon } from 'react-toolbox';
import theme from 'modules/Snackbar/Snackbar.scss'

class SnackbarTest extends React.Component {
  handleSnackbarClick = (event, instance) => {
    console.log('handleSnackbarClick', event, instance);
    this.setState({ active: false });
  };

  handleSnackbarTimeout = (event, instance) => {
    console.log('handleSnackbarClick', event, instance);
    this.setState({ active: false });
  };

  handleClick = () => {
    this.setState({ active: true });
  };

  state = {
    active: true
  };

  render () {
    return (
      <section>
        <Snackbar
          action='Dismiss'
          active={this.state.active}
          icon='account_circle'
          label=''
          timeout={2000}
          onClick={this.handleSnackbarClick}
          onTimeout={this.handleSnackbarTimeout}
          type='cancel'
        > As soon as you're ready, make sure to <a href="/profileEdit">complete your profile</a>. 
        It lets you connect with others you'd like to meet up with!</Snackbar>
        
      </section>
    );
  }
}

export default SnackbarTest