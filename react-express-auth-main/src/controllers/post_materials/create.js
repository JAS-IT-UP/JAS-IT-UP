const createPostMaterial = async (req, res) => {
    const {
      session,
      db: { post_materials }, 
      body: { count, post_id, material_id }, 
    } = req;
  
    const post = await post_materials.create({
      count,
      post_id,
      material_id
    });
    res.send(post);
  };
  
  module.exports = createPostMaterial;