const updatePost = async (req, res) => {
    const {
      session,
      db: { Post },
      params: { id },
      body: { post_picture, maternal_name, project_description, },
    } = req;

    if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const updatedPost = await Post.update( post_picture, maternal_name, project_description);
    res.send(updatedPost);
  };
  
  module.exports = updatePost;