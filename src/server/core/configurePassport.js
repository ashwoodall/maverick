import serialize from '../auth/serialize'
import deserialize from '../auth/deserialize'
import login from '../auth/login'

const passportConfig = (passport) => {
	passport.serializeUser(serialize)
  passport.deserializeUser(deserialize)
  passport.use(login)
}

export default passportConfig

