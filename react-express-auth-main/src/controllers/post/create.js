const createPost = async (req, res) => {
    const {
      session,
      db: { Post },
      body: { material_id, post_picture, project_description },
    } = req;

    const { userId } = session;
    if (!userId ) return res.sendStatus(401);
    console.log("next step should be here")
    const post = await Post.create({
      material_id,
      post_picture,
      project_description,
      user_id: userId,
    });
    console.log(post, "this is the post")
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = createPost;