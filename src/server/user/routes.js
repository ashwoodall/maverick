import login from './login'
import register from './register'

const routes = (app, passport) => {
	app.post('/api/login', passport.authenticate('local-login', { session: false }), (req, res) => {
		res.json(req.user)
	})

	app.post('/api/register', passport.authenticate('local-signup', { session: false }), (req, res) => {
		res.json(req.user)
	})
}

export default routes