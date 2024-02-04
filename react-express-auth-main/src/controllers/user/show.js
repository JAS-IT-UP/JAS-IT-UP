const showUser = async (req, res) => {
  const {
    db: { users }, 
    params: { id }, 
  } = req;

  const user = await users.find(id);
  if (!user) return res.sendStatus(404);

  res.send(user);
};

module.exports = showUser;
