import r from '../db'

import config from '../../../config'

const deserialize = (id, done) => {
	r.table('users').get(id).run().then(user => {
		done(null, user)
	})
}

export default deserialize