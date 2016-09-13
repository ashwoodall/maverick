import r from 'rethinkdb'
import bcrypt from 'bcrypt'

import config from '../../../config'

import userModel from './userModel'

const register = (req, res, next) => {
	const { email, password } = req.body

	let user = userModel({
		email: email,
		password: bcrypt.hashSync(password, 8)
	})

	r.connect(config.rethink, (err, conn) => {
		registerUser(conn, user)
			.then(response => {
				res.json(response)
			})
			.catch(err => {
		    res.status(400);
		    res.json({error: err});
		  })
	})
}

const registerUser = (conn, user) => {
	return r.table('users')
	  .getAll(user.email, { index: 'email' })
	  .run(conn)
	  .then(cursor => cursor.toArray())
	  .then(users => {
	    if (users.length === 0) {
	      return r
	      .table('users')
	      .insert(user)
	      .run(conn)
	      .then(response => {
	        return Object.assign({}, user, { id: response.generated_keys[0] })
	      })
	    } else {
	      return Object.assign({}, { err: 'Email already in use.' })
	    }
	    conn.close()
	  })
}

export default register