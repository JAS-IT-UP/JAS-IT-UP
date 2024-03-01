const findUsersSavedPost = async (req, res) => {
    const {
      session,
      db: { SavedPost },
    } = req;
  
    const { userId } = session;
    const savedPost = await SavedPost.getPostsByUserId(userId);
    console.log(userId)
    console.log(savedPost);
  
    res.send(savedPost);
  };
  
  module.exports = findUsersSavedPost;