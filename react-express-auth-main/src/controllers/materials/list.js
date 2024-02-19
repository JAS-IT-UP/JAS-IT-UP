const listMaterials = async (req, res) => {
  const {
    db: { Material },
  } = req;

  const post = await Material.list();
  res.send(post);
};

module.exports = listMaterials;
