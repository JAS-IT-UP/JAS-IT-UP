const deleteSavedPost = async (req, res) => {
    const {
      session,
      db: { saved_posts },
      params: { id },
    } = req;
  
    const { userId } = session;
  
    if (!userId) return res.sendStatus(401);
  
    const savedPost = await saved_posts.delete(Number(id));
  
    if (!savedPost) return res.sendStatus(404);
  
    res.sendStatus(204);
  };
  
  module.exports = deleteSavedPost;