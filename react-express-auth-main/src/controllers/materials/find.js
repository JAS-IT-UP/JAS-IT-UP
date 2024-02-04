const findMaterial = async (req, res) => {
    const {
      session,
      db: { materials },
    } = req;
    
    const material = await materials.find( req.params.id, session.usersId);
    console.log(materials);
   
    res.send(material);
  };
  
  module.exports = findMaterial;