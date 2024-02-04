const listPosts = async (req, res) => {
    const {
      session,
      db: { posts },
    } = req;
  
    const { userId, userType } = session;
  
    if (!userId && !userType) return res.sendStatus(401);
    const post = await posts.list({
      user_id: userId,
      account_type: userType === "user",
    });
  
    res.send(post);
  };
  
  module.exports = listPosts;