import bcrypt from 'bcrypt'
import { assign } from 'lodash'

import r from '../db'
import config from '../../../config'

import model from './model'

const register = (req, res, next) => {
	const { email, password } = req.body

	let userStruct = model({
		email: email,
		password: bcrypt.hashSync(password, 8),
		created: new Date()
	})

	r.table('users').getAll(email, { index: 'email' }).run().then(users => {
		if (users.length !== 0) 
			res.json({ message: 'Email already in use', type: 'error' })
		else
			r.table('users').insert(userStruct).run().then(response => {
				res.json({ message: 'Email registered, not verified', type: 'success' })
			})
	}).error(err => {
		res.json({ error: err.msg })
	})

}

export default register