import register from '../auth/register'

const api = (app, passport, config) => {
	app.post('/auth/register', register)
}

export default api