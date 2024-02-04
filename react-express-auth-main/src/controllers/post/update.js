const updatePost = async (req, res) => {
    const {
      session,
      db: { posts },
      params: { id },
      body: { posts_picture,project_description, },
    } = req;

    if (!isAuthorized(id, session)) return res.sendStatus(403);
  
    const updatedPost = await posts.update(posts_picture, project_description);
    res.send(updatedPost);
  };
  
  module.exports = updatePost;