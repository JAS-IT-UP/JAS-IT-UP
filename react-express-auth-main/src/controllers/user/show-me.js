const showMe = async (req, res) => {
  const { session, db: { users } } = req;
  if (!session.userId) return res.sendStatus(401);

  const user = await users.find(session.userId);
  res.send(user);
};

module.exports = showMe;
