const listUsers = async (req, res) => {
  const { 
    db: { User} 
  } = req; 

  const user = await User.list();
  res.send(user);
};

module.exports = listUsers;
