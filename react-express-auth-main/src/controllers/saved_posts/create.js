const createSavedPost = async (req, res) => {
    const {
      session,
      db: { saved_posts },
      body: { post_id},
    } = req;
  
    const { userId } = session;
    if (!userId) return res.sendStatus(401);
  
    const bookmark = await saved_posts.create({
      user_id: userId,
      post_id,
    });
    if (!bookmark) return res.status(404);
  
    res.status(201).send(bookmark);
};

module.exports = createSavedPost;