const createUser = async (req, res) => {
  const {
    session,
    db: { User }, 
    body: { profilePicture = "test", firstName, lastName, username, email, password }, 
  } = req;

  const existingUser = await User.findByUsername( username );

  if (existingUser) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  const user = await User.create({
    profilePicture,
    firstName,
    lastName,
    username,
    email,
    password,
  });

  session.usersId = user.id;
  res.status(201).json({ message: 'User created successfully', user });
};

module.exports = createUser; 