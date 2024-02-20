const findsavedPost = async (req, res) => {
    const {
      session,
      db: { SavedPost },
    } = req;
    
    const savedPost = await SavedPost.find( req.params.id, session.userId);
    console.log(savedPost);
   
    res.send(savedPost);
  };
  
  module.exports = findsavedPost;