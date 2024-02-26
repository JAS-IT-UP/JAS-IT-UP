const findPost = async (req, res) => {
    const {
      session,
      db: { Post },
    } = req;
    
    const postId = req.params.id;
    const userId = session.userId;
    console.log('hitting findById all my users posts')
    try {
      const posts = await Post.findByUserId(userId);
      // const post = posts.find(post => post.id === postId);
      // console.log(posts);
      res.send(posts);
    } catch (error) {
      console.error("Error finding post:", error);
      res.status(500).send("Error finding post");
    }
};

module.exports = findPost;