const model = (data) => {
	let user = {
		created: new Date().toString(),
		email: data.email,
		password: data.password
	}

	for (let field in data) {
		user[field] = data[field]
	}

	return user
}

export default model