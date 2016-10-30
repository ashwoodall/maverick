import { Strategy } from 'passport-local'

import db from '../../models'
import bcrypt from 'bcrypt'

var comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash, (err, match) =>  {
        if (err) throw err

        return match
    })
}

const login = (email, password, done) => {
    return db.User.findOne({
        where: {
            'email': email }
    })
        .then(function(user){
            if (!user) return done(null, false)
            if (!comparePasswords(password, user.dataValues.password)) return done(null, false)
        })
        .catch(function(err){
            console.log('Error: ', err)
            if (err) return done(err)
    })
}

export default new Strategy({ usernameField: 'email', passwordField: 'password' }, login)