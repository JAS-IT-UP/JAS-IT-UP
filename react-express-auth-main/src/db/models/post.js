const knex = require("../knex");

class Post {
  constructor({
    id,
    post_picture,
    material_name,
    project_description,
    material_id,
    material_name,
    user_id,
  }) {
    this.id = id;
    this.postPicture = post_picture;
    this.materialName = material_name;
    this.projectDescription = project_description;
    this.materialId= material_id;
    this.materialName= material_name;
    this.userId = user_id;
  }

  static async list() {
    const query =
      "SELECT * FROM posts JOIN materials ON posts.material_id = materials.id"
    const { rows } = await knex.raw(query);
    console.log(rows);
    return rows;
  }

  static async find(id) {
    const query =
      "SELECT * FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const post = rows[0];
    return post ? new Post(post) : null;
  }

  static async findByUserId(userId) {
    const query =
      "SELECT * FROM posts JOIN users ON posts.user_id = users.id WHERE posts.user_id = ?";
    const args = [userId];
    const { rows } = await knex.raw(query, args);
    return rows.map((post) => new Post(post));
  }

  static async create({ postPicture, materialName,projectDescription, userId }) {
    const query = `INSERT INTO posts (post_picture, material_name, project_description, user_id) VALUES (?, ?, ?, ?) RETURNING *`;
    const args = [postPicture, materialName, projectDescription, userId];
    const { rows } = await knex.raw(query, args);
    const createdPost = rows[0];
    return new Post(createdPost);
  }

  static async delete(id) {
    try {
      const query = "DELETE FROM posts WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  // const database = "DELETE FROM posts WHERE id = ?";
  // const results = await knex.raw(database, [id]);
  // return results.rows[0];

  static async deleteAll() {
    return knex.raw("TRUNCATE posts;");
  }

  update = async ({ postPicture, materialName, projectDescription }) => {
    // dynamic queries are easier if you add more properties
    const rows = await knex("posts")
      .where({ id: this.id })
      .update({ postPicture, materialName, projectDescription })
      .returning("*");

    const updatedPost = rows[0];
    return updatedPost ? new Post(updatedPost) : null;
  };
}

module.exports = Post;
