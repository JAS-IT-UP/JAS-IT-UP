const createSavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    body: { post_id, user_id },
  } = req;

  const { userId } = session;
  if (!userId || !post_id) return res.sendStatus(401);

  const savedPost = await SavedPost.create({
    user_id: userId,
    post_id,
  });
  if (!savedPost) return res.status(404);

  res.status(201).send(savedPost);
};

module.exports = createSavedPost;