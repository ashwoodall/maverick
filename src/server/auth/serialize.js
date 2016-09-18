const serialize = (user, done) => {
	return done(null, user.id)
}

export default serialize