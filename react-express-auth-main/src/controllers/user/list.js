const listUsers = async (req, res) => {
  const { 
    db: { users} 
  } = req; 

  const user = await users.list();
  res.send(user);
};

module.exports = listUsers;
