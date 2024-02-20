const findPostMaterial = async (req, res) => {
    const {
      session,
      db: { PostMaterial },
    } = req;
    
    const post = await PostMaterial.find( req.params.id, session.usersId);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = findPostMaterial;