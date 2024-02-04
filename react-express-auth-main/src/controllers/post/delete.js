const deletePost = async (req, res) => {
    const {
      db: { posts },
      params: { id },
    } = req;
    try {
      const post = await posts.delete(Number(id));
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      return res.json({ message: "Post deleted" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to delete post" });
    }
  };
  
  module.exports = deletePost;