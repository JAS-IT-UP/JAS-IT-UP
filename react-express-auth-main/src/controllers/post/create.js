const createPost = async (req, res) => {
    const {
      session,
      db: { posts },
      body: { post_picture, project_description},
    } = req;
  
    const { userId, userType } = session;
    if (!userId || !userType) return res.sendStatus(401);
  
    const post = await posts.create({
      post_picture,
      project_description,
      user_id: userId,
      account_type: userType === "user",
    });
    if (!post) return res.sendStatus(404);
  
    res.send(post);
  };
  
  module.exports = createPost;