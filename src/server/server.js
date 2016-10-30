import chalk from 'chalk'
import passport from 'passport'
import socketIo from 'socket.io'
import models from './db/models'

import config from '../../config'

// Passport auth
// import login from './user/login'
// import register from './user/register'
//
// // Routes
// import userRoutes from './user/routes'

const server = (app) => {

  // Setup Passport
  console.log(chalk.yellow('[passport] Initializing passport...'))

  app.use(passport.initialize())
  app.use(passport.session())

    return models.User.create({
        email: 'tom@blah.com',
        password: 'blurppp'
    });
  //
  // passport.use('local-login', login)
  // passport.use('local-signup', register)
  //
  // // Setup Routes
  // console.log(chalk.yellow('[express] Initializing api routes...'))
  //
  // userRoutes(app, passport)

}

export default server