const createUser = async (req, res) => {
  const {
    session,
    db: { users }, 
    body: { profile_picture, first_name, last_name, username, email, password }, 
  } = req;

  const existingUser = await users.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  const user = await users.create({
    profile_picture,
    first_name,
    last_name,
    username,
    email,
    password,
  });

  session.usersId = user.id;
  res.status(201).json({ message: 'User created successfully', users });
};

module.exports = createUser;