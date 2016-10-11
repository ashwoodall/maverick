import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const schema = mongoose.Schema({
	email: String,
	password: String
})

schema.methods.generatePassword = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

schema.methods.comparePasswords = function(password) {
	return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', schema)