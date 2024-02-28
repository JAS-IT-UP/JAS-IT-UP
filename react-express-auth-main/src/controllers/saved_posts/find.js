const findsavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    body: { post_id },
  } = req;

  const { userId } = session;
  const savedPost = await SavedPost.findByUserId(userId);
  console.log(userId)
  console.log(savedPost);

  res.send(savedPost);
};

module.exports = findsavedPost;