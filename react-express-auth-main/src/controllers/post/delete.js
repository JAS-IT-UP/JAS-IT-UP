const deletePost = async (req, res) => {
    const {
      db: { Post },
      params: { id },
    } = req;
    try {
      const post = await Post.delete(Number(id));
      if (!post) {
        console.log(post, "this is the post")
        console.log(id, "this is the id")
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json({ message: "Post deleted" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete post" });
    }
  };
  
  module.exports = deletePost;