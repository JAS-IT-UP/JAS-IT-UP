const findPostMaterial = async (req, res) => {
    const {
      session,
      db: { PostMaterial },
    } = req;
    
    const post = await post_materials.find( req.params.id, session.usersId);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = findPostMaterial;