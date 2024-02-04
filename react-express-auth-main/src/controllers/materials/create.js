const createMaterial = async (req, res) => {
    const {
      db: { materials }, 
      body: { material_name }, 
    } = req;
  
    const material = await materials.create({
      material_name: material_name,
    });
    res.send(material);
  };
  
  module.exports = createMaterial;