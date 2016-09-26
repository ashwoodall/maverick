import bluebird from 'bluebird'
import config from '../../../config'
import { forEach } from 'lodash'
import chalk from 'chalk'

import r from '../db'

const dbConfig = bluebird.coroutine(function* () {
	try {
		yield r.dbCreate(config.db.name)
		console.log(chalk.yellow(`[rethink] ${config.db.name} database created successfully`))

		forEach(config.db.tables, function* (table) {
			yield r.db(config.db.name).tableCreate(table.name)
			console.log(chalk.yellow(`[rethink] ${table.name} table created successfully`))

			yield r.db(config.db.name).table(table.name).indexCreate(table.index)
			console.log(chalk.yellow(`[rethink] ${table.name} index created successfully`))
		})
	} catch(err) {
		console.log(chalk.red(`[rethink] ${err.msg}`))
	}
})

export default dbConfig
