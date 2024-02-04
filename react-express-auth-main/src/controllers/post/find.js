const findPost = async (req, res) => {
    const {
      session,
      db: { posts },
    } = req;
    
    const post = await posts.find( req.params.id, session.userId);
    console.log(post);
   
    res.send(post);
  };
  
  module.exports = findPost;