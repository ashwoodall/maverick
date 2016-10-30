import { Strategy } from 'passport-local'

import db from '../../models'
// var db = require('../models')

// var Promise = require('bluebird')
import Promise from 'bluebird'

var bcryptHash = Promise.promisify(require('bcrypt').hash)


var createUser = (email, password) => {
    return bcryptHash(password, 8)
    .then(function(hashedPassword){
        console.log(hashedPassword)
        return db.User.create({
            email: email,
            password: hashedPassword
        })
    })
    .catch(function(err){
        throw err
    })
}

const register = (email, password, done) => {
    return db.User.findOne({
        where: {
            'email': email }
    })
        .then(function(user){
            if (!user){
                return createUser(email, password)
            } else {
                throw 'Pre-existing User'
            }
            //Add less janky custom error and filtered catch in the future
        })
        .then(function(newUser){
            return done(null, newUser.dataValues)
        })
        .catch(function(err){
            console.log('Error: ', err)
            if (err === 'Pre-existing User') return done(null, false)

            return done(err)
        })
}

export default new Strategy({ usernameField: 'email' }, register)