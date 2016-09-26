// Core
import express from 'express'
import { Server } from 'http'
import bodyParser from 'body-parser'
import passport from 'passport'
import socketIo from 'socket.io'
import historyApiFallback from 'connect-history-api-fallback'
import chalk from 'chalk'

// Configs
import config from '../config'
import db from '../src/server/core/configureDb'
import api from '../src/server/core/configureApi'
import passportConfig from '../src/server/core/configurePassport'

// Servers
import devServer from './dev.server'

const app = express()
const server = Server(app)

export const io = socketIo(server)

// Setup server
console.log(chalk.yellow('[express] Initializing content...'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(config.paths.base))
app.use(historyApiFallback({ verbose : true }))

// Setup db
console.log(chalk.yellow('[express] Initializing database...'))

db()

// Checking environment
if (config.env === 'development')
	console.log(chalk.yellow('[webpack] Initializing development middlewares...'))

	devServer(app, config)

// Setup passport
console.log(chalk.yellow('[passport] Initializing passport...'))

app.use(passport.initialize())
app.use(passport.session())
passportConfig(passport)


// Setup api
console.log(chalk.yellow('[express] Initializing api...'))

api(app, passport, config)

server.listen(config.port, (error) => {
  if (error)
    console.error(chalk.red(error)) // eslint-disable-line no-console
  else {
  	console.log(chalk.green(`[express] Listening at http://${config.host}:${config.port}`))
  }
})
