import { Strategy } from 'passport-local'

import db from '../../models'
// var db = require('../models')

// var Promise = require('bluebird')
import Promise from 'bluebird'

var bcrypt = Promise.promisifyAll(require('bcrypt'))


var createUser = (email, password) => {
    return bcrypt.genSaltAsync(8)
        .then(function(salt){
            return bcrypt.hashAsync(password, salt)
        })
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
            }
            //Add logic for pre-existing users
        })
        .then(function(newUser){
            return done(null, newUser.dataValues)
        })
        .catch(function(err){
            console.log('Error: ', err)
            return done(err)
        })
}

export default new Strategy({ usernameField: 'email' }, register)