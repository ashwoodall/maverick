import r from 'rethinkdb'
import bcrypt from 'bcrypt'
import { Strategy } from 'passport-local'

import config from '../../../config'

const loginUser = (email, password, done) => {
	r.connect(config.rethink, (err, conn) => {
		r.table('users')
			.getAll(email, { index: 'email' })
			.run(conn)
			.then(cursor => cursor.toArray())
			.then(user => {
				if (!user[0])
					done(null, false, { message: `Email ${email} not found` })
				else if (bcrypt.compareSync(password, user[0].password))
					done(null, user[0])
				else
					done(null, false, { message: 'Invalid email or password'})
			})
	})
}

export default new Strategy({ usernameField: 'email' }, loginUser)