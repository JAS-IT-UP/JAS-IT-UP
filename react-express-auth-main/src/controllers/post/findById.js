const findPost = async (req, res) => {
    const {
      session,
      db: { Post },
    } = req;
    
    const postId = req.params.id;
    const userId = session.userId;

    try {
      const posts = await Post.findByUserId(userId);
      const post = posts.find(post => post.id === postId);
      console.log(post);
      res.send(post);
    } catch (error) {
      console.error("Error finding post:", error);
      res.status(500).send("Error finding post");
    }
};

module.exports = findPost;