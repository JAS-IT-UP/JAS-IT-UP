const deleteSavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    params: { id },
  } = req;

  const { userId } = session;

  if (!userId) return res.sendStatus(401);

  const savedPost = await SavedPost.delete(Number(id));

  if (!savedPost) return res.sendStatus(404);

  res.sendStatus(204);
};

module.exports = deleteSavedPost;
