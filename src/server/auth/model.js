const model = (data) => {
	let user = {
		created: new Date().toString(),
		email: data.email,
		password: data.password
	}
	
	return user
}

export default model