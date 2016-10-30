import { Strategy } from 'passport-local'

import db from '../../models'
import Promise from 'bluebird'

var bcryptCompare = Promise.promisify(require('bcrypt').compare)

var comparePasswords = (password, hash) => {
    return bcryptCompare(password, hash)
        .then(function(match){
            return match
        })
        .catch(function(err){
            throw err
        })
}

const login = (email, password, done) => {
    return db.User.findOne({
        where: {
            'email': email }
    })
        .then(function(user){
            if (!user) return done(null, false)

            if (!comparePasswords(password, user.password)) return done(null, false)

            return done(null, user.dataValues)
        })
        .catch(function(err){
            console.log('Error: ', err)
            if (err) return done(err)
    })
}

export default new Strategy({ usernameField: 'email', passwordField: 'password' }, login)