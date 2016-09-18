import { Router } from 'express'

import register from '../auth/register'

const api = (app, passport, config) => {
	app.post('/auth/login', passport.authenticate('local'), loginCallback)
	app.post('/auth/register', register)
}

const loginCallback = (req, res) => {
	res.status(200).json({
		authenticated: true,
		id: req.user.id,
		name: req.user.name || {},
		email: req.user.email
	})
}

export default api