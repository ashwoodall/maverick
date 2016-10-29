import chalk from 'chalk'
import Sequelize from 'sequelize'
import passport from 'passport'
import socketIo from 'socket.io'

import config from '../../config'

// Passport auth
// import login from './user/login'
// import register from './user/register'
//
// // Routes
// import userRoutes from './user/routes'

const server = (app) => {

  var sequilize = new Sequelize('oh-hi', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });

  sequilize
      .authenticate()
      .then(function() {
        console.log(chalk.yellow('[postgres] Database connection has been established successfully.'));
      })
      .catch(function (err) {
        console.log(chalk.red('[postgres] Unable to connect to the database:', err));
      });

  // // Setup Passport
  // console.log(chalk.yellow('[passport] Initializing passport...'))
  //
  // app.use(passport.initialize())
  // app.use(passport.session())
  //
  // passport.use('local-login', login)
  // passport.use('local-signup', register)
  //
  // // Setup Routes
  // console.log(chalk.yellow('[express] Initializing api routes...'))
  //
  // userRoutes(app, passport)

  var User = sequilize.define('user', {
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });

  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
}

export default server