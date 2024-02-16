const knex = require("../knex");

class Post {
  constructor({ id, post_picture, project_description, user_id }) {
    this.id = id;
    this.postPicture = post_picture;
    this.projectDescription = project_description;
    this.userId = user_id;
  }

  // static async list() {
  //   const query = "SELECT * FROM posts JOIN users ON posts.user_id = users.id";
  //   const { rows } = await knex.raw(query);
  //   return rows.map((post) => new Post(post));
  // }

  static async list() {
    const query =
      "SELECT p.project_description AS post_des, p.post_picture as postPic, STRING_AGG(m.material_name, ',') AS postmaterials FROM posts p INNER JOIN post_materials pm ON p.id = pm.post_id INNER JOIN materials m ON pm.material_id = m.id GROUP BY p.project_description,  p.post_picture";
    const { rows } = await knex.raw(query);
    return rows.map((post) => new Post(post));
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
      "SELECT * FROM users JOIN users ON posts.user_id = users.id WHERE posts.user_id = ?";
    const args = [userId];
    const { rows } = await knex.raw(query, args);
    return rows.map((post) => new Post(post));
  }

  static async create({ postPicture, projectDescription, userId }) {
    console.log(postPicture, projectDescription, userId);
    const query = `INSERT INTO posts (post_picture, project_description, user_id) VALUES (?, ?, ?) RETURNING *`;
    const args = [postPicture, projectDescription, userId];
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

  static async deleteAll() {
    return knex.raw("TRUNCATE posts;");
  }

  update = async ({ postPicture, projectDescription }) => {
    // dynamic queries are easier if you add more properties
    const rows = await knex("posts")
      .where({ id: this.id })
      .update({ postPicture, projectDescription })
      .returning("*");

    const updatedPost = rows[0];
    return updatedPost ? new Post(updatedPost) : null;
  };
}

module.exports = Post;
