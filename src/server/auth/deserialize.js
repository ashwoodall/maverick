import r from 'rethinkdb'

import config from '../../../config'

const deserialize = (id, done) => {
	r.connect(config.rethink, (err, conn) => {
		r.table('users')
			.get(id)
			.run(conn)
			.then(user => {
				done(null, user)
			})
	})
}

export default deserialize