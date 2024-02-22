const loginUser = async (req, res) => {
  const {
    session, 
    db: { User }, 
    body: { username, password }, 
  } = req;

  const user = await User.findByUsername(username);
  if (!user) return res.sendStatus(404);
console.log(user, "this is the user");

  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);
  console.log(user, "this is the user");
  session.userId = user.id;

  res.send(user);
};

module.exports = loginUser;
 