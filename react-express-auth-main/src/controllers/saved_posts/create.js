const createSavedPost = async (req, res) => {
  const {
    session,
    db: { SavedPost },
    body: { post_id},
  } = req;

  const { userId } = session;
 
  console.log(post_id, userId)
  const savedPost = await SavedPost.create(
    post_id,
    userId
  );
  if (!savedPost) return res.status(404);

  res.status(201).send(savedPost);
};

module.exports = createSavedPost;