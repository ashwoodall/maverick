import { Router } from 'express'

import login from '../auth/login'
import register from '../auth/login'

const routes = (app, passport) => {
	let router = Router()

	router.post('/auth/login', passport.authenticate('local'), login)
	router.post('/auth/register', register)

	app.use(router)
}

export default routes