import { Strategy } from 'passport-local'

import User from './schema'

const login = (email, password, done) => {
	User.findOne({ 'email': email }, (err, user) => {
		if (err) return done(err)
		if (!user) return done(null, false)
		if (!user.comparePasswords(password, user.password)) return done(null, false)

		return done(null, user)
	})
}

export default new Strategy({ usernameField: 'email', passwordField: 'password' }, login)