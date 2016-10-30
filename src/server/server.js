import chalk from 'chalk'
import passport from 'passport'

// Passport auth
import login from './db/methods/user/login'
import register from './db/methods/user/register'

// // Routes
import userRoutes from './user/routes'

const server = (app) => {

  // Setup Passport
  console.log(chalk.yellow('[passport] Initializing passport...'))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.use('local-login', login)
  passport.use('local-signup', register)

  // Setup Routes
  console.log(chalk.yellow('[express] Initializing user routes...'))

  userRoutes(app, passport)

}

export default server