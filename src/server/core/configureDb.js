import r from 'rethinkdb'
import { forEach } from 'lodash'
import chalk from 'chalk'

const tables = (config) => {
	forEach(config.db.tables, (index) => {
		table(config, index)
	})
}

const table = (config, name) => {
	r.connect(config.rethink, (err, conn) => {
		r.tableCreate(name.table).run(conn, (err, res) => {
			console.log(chalk.green(`[rethink] ${name.table} table created successfully`))

			conn.close()
		})
	})
}

const indexes = (config) => {
	forEach(config.db.tables, (index) => {
		tableIndex(config, index)
	})
}

const tableIndex = (config, name) => {
	r.connect(config.rethink, (err, conn) => {
    r.table(name.table)
    .indexCreate(name.index)
    .run(conn, (err, res) => {
      conn.close()
    })
  })
}

export default (config) => {
	r.connect(config.rethink, (err, conn) => {
		r.dbCreate(config.db.name).run(conn, (err, res) => {
			console.log(chalk.green(`[rethink] ${config.db.name} database created successfully`))

			conn.close()
		})
	})

	tables(config)
	indexes(config)
} 