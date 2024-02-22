const createPost = async (req, res) => {
    const {
      session,
      db: { Post },
      body: { postPicture, projectDescription, materialId },
    } = req;

    const { userId } = session;
    if (!userId ) return res.sendStatus(401);
    
    console.log(userId, postPicture, projectDescription, materialId)
    
    const post = await Post.create({
      postPicture,
      projectDescription,
      materialId,
      userId,
    });
    console.log(post, "this is the post")
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = createPost;