const findPostMaterial = async (req, res) => {
    const {
      session,
      db: { post_materials },
    } = req;
    
    const post = await post_materials.find( req.params.id, session.usersId);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = findPostMaterial;