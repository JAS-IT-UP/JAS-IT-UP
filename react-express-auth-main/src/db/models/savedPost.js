const knex = require("../knex");

class SavedPost {
  constructor({ id, post_id, user_id }) {
    this.id = id;
    this.postId = post_id;
    this.userId = user_id;
  }

  static async list() {
    const query =
      "SELECT * FROM saved_posts JOIN posts ON saved_posts.post_id = posts.id JOIN users ON saved_posts.user_id = users.id";
    const { rows } = await knex.raw(query);
    return rows.map((savedPost) => new SavedPost(savedPost));
  }

  static async find(id) {
    const query =
      "SELECT * FROM saved_posts JOIN posts ON saved_posts.post_id = posts.id JOIN users ON saved_posts.user_id = users.id WHERE saved_posts.id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const savedpost = rows[0];
    return savedpost ? new SavedPost(savedpost) : null;
  }

  static async findByUserId(userId) {
    const query =
      "SELECT * FROM saved_posts JOIN posts ON saved_posts.post_id = posts.id JOIN users ON saved_posts.user_id = users.id WHERE saved_posts.user_id = ?";
    const args = [userId];
    const { rows } = await knex.raw(query, args);
    return rows.map((savedPost) => new SavedPost(savedPost));
  }
  static async getPostsByUserId(userId) {
    const query =
      "SELECT posts.*, materials.material_name, users.profile_picture FROM posts INNER JOIN saved_posts ON posts.id = saved_posts.post_id INNER JOIN materials ON posts.material_id = materials.id INNER JOIN users ON posts.user_id = users.id WHERE saved_posts.user_id = ?";
    const args = [userId];
    const { rows } = await knex.raw(query, args);
    return rows;
  }

  static async create(postId, userId) {
    const query = `INSERT INTO saved_posts (post_id, user_id) VALUES (?, ?) RETURNING *`;
    const args = [postId, userId];
    const { rows } = await knex.raw(query, args);
    const createdSavedPost = rows[0];
    return new SavedPost(createdSavedPost);
  }

  static async delete(id) {
    try {
      const query = "DELETE FROM saved_posts WHERE id = ?";
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE saved_posts;");
  }

  update = async ({ post_id, user_id }) => {
    // dynamic queries are easier if you add more properties
    const rows = await knex("saved_posts")
      .where({ id: this.id })
      .update({ post_id, user_id })
      .returning("*");

    const updatedSavedPost = rows[0];
    return updatedSavedPost ? new SavedPost(updatedSavedPost) : null;
  };
}

module.exports = SavedPost;
