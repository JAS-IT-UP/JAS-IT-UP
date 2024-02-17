const listPosts = async (req, res) => {
  const {
    session,
    db: { Post },
  } = req;

  const { userId } = session;

  if (!userId) return res.sendStatus(401);
  const post = await Post.list({
    user_id: userId,
  });
  res.send(post);
};

module.exports = listPosts;
