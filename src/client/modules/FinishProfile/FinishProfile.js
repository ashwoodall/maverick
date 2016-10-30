import React, { Component } from 'react'
import { Card, Input, FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'
import theme from 'modules/FinishProfile/FinishProfile.scss'

const FinishProfile = ({ email }) => (
	<div className={ theme.finishProfile } >
		<Flexbox layout='column' align='center center'>
			<Card className={ theme.card } align='center center'>
				<FontIcon className={ theme.close } value='close' />
				<Flexbox layout='column' align='center center'>
					<FontIcon className={ theme.account } value='account_circle' />
					<h5>Ready to connect?</h5>
					<p><a href="/profileEdit">Complete your profile</a></p>
				</Flexbox>
			</Card>
		</Flexbox>
	</div>
)

export default FinishProfile