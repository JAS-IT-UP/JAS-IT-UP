const findsavedPost = async (req, res) => {
    const {
      session,
      db: { saved_posts },
    } = req;
    
    const savedPost = await saved_posts.find( req.params.id, session.userId);
    console.log(savedPost);
   
    res.send(savedPost);
  };
  
  module.exports = findsavedPost;