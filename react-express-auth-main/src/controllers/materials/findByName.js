const findByName = async (req, res) => {
    const {
        session: { userId },
        db: { Material },
        body: { materialName },
    } = req;

    if (!userId) return res.sendStatus(401);
    const materialByName = await Material.findByMaterialName({ materialName });

    if (!materialName) return res.sendStatus(404);

    res.send(materialByName);
};

module.exports = findByName;