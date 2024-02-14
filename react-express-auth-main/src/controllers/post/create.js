const createPost = async (req, res) => {
    const {
      // session,
      db: { Post },
      body: { postPicture, projectDescription},
    } = req;
  
    if (!userId) return res.sendStatus(401);
  
    const post = await Post.create({
      postPicture,
      projectDescription,
      userId,
    });
    
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = createPost;