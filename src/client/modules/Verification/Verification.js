import React, { Component } from 'react'
import { Button, Card, Input, FontIcon } from 'react-toolbox'
import Flexbox from 'react-material-flexbox'
import Svg from 'modules/Svg/Svg'
import HeaderLogo from 'assets/oh-hi_Logo_2-03.svg'
import theme from 'modules/Verification/Verification.scss'

const Verification = ({ email }) => (
	<div className={ theme.verification } data-oh-hi='Verification'>
		<Flexbox layout='column' align='start center'>
			<Card className={ theme.card }>
				<Svg source={ HeaderLogo } className={ theme.logo } />
				<Flexbox layout='column' align='center center'>
					<h3>Check your email!</h3>
					<FontIcon className={ theme.mail } value='mail_outline' />
					<p>For your security, we need to verify your email address.</p>
					<Flexbox className={ theme.email } layout='column' align='center center'>
						<p>We sent an email to:</p>
						<h5>{email}</h5>
					</Flexbox>
					<p>Click the link in the email to activate your account.</p>
				</Flexbox>
			</Card>
			<p>Can't find the email? <a href="/resend">Resend</a></p>
				<p>Need to change your email address? <a href="/changeEmail">Change Email</a></p>
		</Flexbox>
	</div>
)

export default Verification