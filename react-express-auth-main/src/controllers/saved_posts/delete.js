const deleteSavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    body: { post_id, user_id },
  } = req;

  const { userId } = session;

  if (!userId || !post_id) return res.sendStatus(401);

  const savedPost = await SavedPost.delete(Number(post_id), Number(userId));

  if (!savedPost) return res.sendStatus(404);

  res.sendStatus(204);
};

module.exports = deleteSavedPost;