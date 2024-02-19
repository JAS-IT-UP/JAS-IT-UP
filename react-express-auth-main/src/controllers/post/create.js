const createPost = async (req, res) => {
    const {
      session,
      db: { Post },
      body: { postPicture, materialName, projectDescription },
    } = req;

    const { userId } = session;
    if (!userId ) return res.sendStatus(401);
    console.log("next step should be here")
    const post = await Post.create({
      postPicture,
      materialName,
      projectDescription,
      userId,
    });
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = createPost;