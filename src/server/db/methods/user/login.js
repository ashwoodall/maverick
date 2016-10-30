import { Strategy } from 'passport-local'

import db from '../../models'
import Promise from 'bluebird'
import {compare} from 'bcrypt'

const bcryptCompare = Promise.promisify(compare)

const comparePasswords = (password, hash) => {
    return bcryptCompare(password, hash)
        .then((match) => match)
        .catch((err) => {throw err})
}

const login = (email, password, done) => {
    let userInfo;
    return db.User.findOne({
        where: {
            'email': email
        }
    })
        .then((user) => {
            if (!user) throw 'No user in database';
            //Clean up with custom error
            userInfo = user;

            return comparePasswords(password, user.password)
        })
        .then((match) => {
            if (!match) {
                return done(null, false)
            } else {
                return done(null, userInfo.dataValues)
            }

        })
        .catch((err) => {
            if (err === 'No user in database') return done(null, false)
            done(err)
        })
}

export default new Strategy({ usernameField: 'email', passwordField: 'password' }, login)