import { Strategy } from 'passport-local'

import db from '../../models'

import Promise from 'bluebird'
import {hash} from 'bcrypt'

const bcryptHash = Promise.promisify(hash)

const createUser = (email, password) => {
    return bcryptHash(password, 8)
    .then((hashedPassword) => {
        return db.User.create({
            email: email,
            password: hashedPassword
        })
    })
    .catch((err) => {throw err})
}

const register = (email, password, done) => {
    return db.User.findOne({
        where: {
            'email': email }
    })
        .then((user) => {
            if (!user){
                return createUser(email, password)
            } else {
                throw 'Pre-existing User'
            }
            //Add less janky custom error and filtered catch in the future
        })
        .then((newUser) => done(null, newUser.dataValues))
        .catch((err) => {
            if (err === 'Pre-existing User') return done(null, false)

            return done(err)
        })
}

export default new Strategy({ usernameField: 'email' }, register)