const listsavedPosts = async (req, res) => {
    const {
      session,
      db: { saved_posts },
    } = req;
  
    const { userId } = session;
  
    if (!userId) return res.sendStatus(401);
  
    const savedPost = await saved_posts.list({
      user_id: userId,
    });
  
    res.send(savedPost);
  };
  
  module.exports = listsavedPosts;