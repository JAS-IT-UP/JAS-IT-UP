const findMaterial = async (req, res) => {
    const {
      session,
      db: { Material },
    } = req;
    
    const material = await Material.find( req.params.id, session.usersId);
    console.log(material);
   
    res.send(material);
  };
  
  module.exports = findMaterial;