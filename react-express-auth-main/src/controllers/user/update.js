const { isAuthorized } = require('../../utils/auth-utils');

const updateUser = async (req, res) => {
  const {
    session, 
    db: { users }, 
    body: {username}, 
    params: { id }, 
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const user = await users.find(id);
  if (!user) return res.sendStatus(404);

  const updatedUser = await users.update(username);
  res.send(updatedUser);
};

module.exports = updateUser;
