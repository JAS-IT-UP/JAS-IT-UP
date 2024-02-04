const listPostMaterials = async (req, res) => {
    const { 
      db: { post_materials} 
    } = req; 
  
    const post = await post_materials.list();
    res.send(post);
  };
  
  module.exports = listPostMaterials;