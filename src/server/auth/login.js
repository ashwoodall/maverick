import bcrypt from 'bcrypt'
import { Strategy } from 'passport-local'

import r from '../db'
import config from '../../../config'

const loginUser = (email, password, done) => {

	r.table('users').getAll(email, { index: 'email' }).run().then(user => {
		if(!user[0])
			done(null, false, { message: `Email ${email} not found`, type: 'error' })
		else if (bcrypt.compareSync(password, user[0].password))
			done(null, user[0])
		else
			done(null, false, { message: 'Invalid email or password', type: 'error'})
	})
}

export default new Strategy({ usernameField: 'email' }, loginUser)