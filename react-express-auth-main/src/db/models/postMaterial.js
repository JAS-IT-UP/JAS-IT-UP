const knex = require("../knex");

class PostMaterial {
  constructor({ id, count, post_id, material_id }) {
    this.id = id;
    this.count = count;
    this.postId = post_id;
    this.materialId = material_id;
  }

  static async list() {
    const query =
      "SELECT * FROM post_materials JOIN posts ON post_materials.post_id = posts.id JOIN materials ON post_materials.material_id = materials.id";
    const { rows } = await knex.raw(query);
    return rows.map((postMaterial) => new PostMaterial(postMaterial));
  }

  static async find(id) {
    const query =
      "SELECT * FROM post_materials JOIN posts ON post_materials.post_id = posts.id JOIN materials ON post_materials.material_id = materials.id WHERE post_materials.id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const postMaterial = rows[0];
    return postMaterial ? new PostMaterial(postMaterial) : null;
  }

  static async findByMaterialId(materialId) {
    const query =
      "SELECT * FROM post_materials JOIN posts ON post_materials.post_id = posts.id JOIN materials ON post_materials.material_id = materials.id WHERE post_materials.material_id = ?";
    const args = [materialId];
    const { rows } = await knex.raw(query, args);
    return rows.map((postMaterial) => new PostMaterial(postMaterial));
  }

  static async create(count, postId, materialId) {
    const query = `INSERT INTO post_materials (count, post_id, material_id) VALUES (?, ?, ?) RETURNING *`;
    const args = [count, postId, materialId];
    const { rows } = await knex.raw(query, args);
    const createdPostMaterial = rows[0];
    return new PostMaterial(createdPostMaterial);
  }

  static async delete(id) {
    try {
      const query = "DELETE FROM post_materials WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE post_materials;");
  }

  update = async ({ count, postId, materialId }) => {
    // dynamic queries are easier if you add more properties
    const rows = await knex("post_materials")
      .where({ id: this.id })
      .update({ postId, materialId })
      .returning("*");

    const updatedPostMaterial = rows[0];
    return updatedPostMaterial ? new PostMaterial(updatedPostMaterial) : null;
  };
}

module.exports = PostMaterial;
