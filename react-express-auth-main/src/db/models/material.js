const knex = require("../knex");

class Material {
  constructor({ id, material_name }) {
    this.id = id;
    this.materialName = material_name;
  }

  static async list() {
    const query = "SELECT * FROM materials";
    const { rows } = await knex.raw(query);
    return rows.map((material) => new Material(material));
  }

  static async find(id) { 
    const query = "SELECT * FROM materials WHERE materials.id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const material = rows[0];
    return material ? new Material(material) : null;
  }
   

  static async findByMaterialName(materialName) {
    const query = "SELECT * FROM materials WHERE materials.material_name = ?";
    const args = [materialName];
    const { rows } = await knex.raw(query, args);
    return rows.map((material) => new Material(material));
  }

  static async create(materialName) {
    try {
      const query =
        "INSERT INTO materials (material_name) VALUES (?) RETURNING *";
      const args = [materialName];
      const { rows } = await knex.raw(query, args);
      const createdMaterial = rows[0];
      return new Material(createdMaterial);
    } catch (err) {
      console.error("Error creating material:", err);
      throw err;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE materials;");
  }

  update = async ({ materialName }) => {
    try {
      const rows = await knex("materials")
        .where({ id: this.id })
        .update({ materialName })
        .returning("*");
      const updatedMaterial = rows[0];
      return updatedMaterial ? new Material(updatedMaterial) : null;
    } catch (err) {
      console.error("Error updating material:", err);
      throw err;
    }
  };
}

module.exports = Material;
