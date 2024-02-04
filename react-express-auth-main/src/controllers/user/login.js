const loginUser = async (req, res) => {
  const {
    session, 
    db: { users }, 
    body: { username, password }, 
  } = req;

  const user = await users.findByUsername(username);
  if (!user) return res.sendStatus(404);

  const isPasswordValid = await users.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);

  session.userId = user.id;
  res.status(200).json({ message: 'User logged in successfully', user });
  res.send(user);
};

module.exports = loginUser;
