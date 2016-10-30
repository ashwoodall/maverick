// Core
import express from 'express'
import bodyParser from 'body-parser'
import historyApiFallback from 'connect-history-api-fallback'


import chalk from 'chalk'
import cors from 'cors'

// Config
import config from '../config'

// Servers
import devServer from './dev.server'
import server from '../src/server/server'

//Database
import models from '../src/server/db/models'

const app = express()
const api = express()

api.use(cors())

// Setup server
console.log(chalk.yellow('[express] Initializing content...'))

api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())
app.use(express.static(config.paths.base))
app.use(historyApiFallback({ verbose : true }))

// Checking environment
if (config.env === 'development')
  console.log(chalk.yellow('[webpack] Initializing development middlewares...'))

  devServer(app, config)

// Setup passport
console.log(chalk.yellow('[express] Initializing api...'))

server(api)

models.sequelize.sync().then(function(){
  api.listen(config.api.port, error => {
    if (error)
      console.error(chalk.red(error))
    else
      console.log(chalk.green(`[express] API Listening at http://${config.host}:${config.api.port}`))
  })

  app.listen(config.port, error => {
    if (error)
      console.error(chalk.red(error))
    else
      console.log(chalk.green(`[express] APP Listening at http://${config.host}:${config.port}`))
  })
});


