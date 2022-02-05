public async findByLogin({email, password}: AuthDto): Promise<UserDTO> {
	const user = await this.repo.findOne({where: {email}});
	const generatePassword = (Math.random() + 1).toString(36).substring(7);
	let passwordCompareHash = await bcrypt.hash(gereratePassword, 10);
	let passwordCompare = user?.password;
	if (!user) {
		//throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
		this.passwordCompare = this.passwordCompareHash;
	}

	const compare = await this.comparePasswords(user.password, password);
	if (!compare){
		throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
	}

	return UserDTO.fromEntity(user);
}
