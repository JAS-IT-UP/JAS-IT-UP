const deleteSavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    params : { id}
  } = req;

  //
  const { userId } = session;
  console.log(userId)



  const savedPost = await SavedPost.delete(Number(id), userId);

  if (!savedPost) return res.sendStatus(404);

  res.sendStatus(204);
};

module.exports = deleteSavedPost;