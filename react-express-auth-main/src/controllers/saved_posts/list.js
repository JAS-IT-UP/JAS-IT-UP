const listsavedPosts = async (req, res) => {
    const {
      session,
      db: { SavedPost },
    } = req;
  
    const { userId } = session;
  
    if (!userId) return res.sendStatus(401);
  
    const savedPost = await SavedPost.list({
      user_id: userId,
    });
  
    res.send(savedPost);
  };
  
  module.exports = listsavedPosts;