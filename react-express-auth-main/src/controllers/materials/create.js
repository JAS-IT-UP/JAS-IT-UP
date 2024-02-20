const createMaterial = async (req, res) => {
    const {
      db: { Material }, 
      body: { material_name }, 
    } = req;
  
    const material = await Material.create({
      material_name: material_name,
    });
    res.send(material);
  };
  
  module.exports = createMaterial;