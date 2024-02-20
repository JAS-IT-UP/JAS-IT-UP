const createPostMaterial = async (req, res) => {
    const {
      session,
      db: { PostMaterial }, 
      body: { count, post_id, material_id }, 
    } = req;
  
    const post = await PostMaterial.create({
      count,
      post_id,
      material_id
    });
    res.send(post);
  };
  
  module.exports = createPostMaterial;