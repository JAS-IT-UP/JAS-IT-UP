const knex = require('../knex');

class Post {

  constructor({ id, post_picture, project_description, user_id }) {
    this.id = id;
    this.postPicture = post_picture;
    this.projectDescription = project_description;
    this.userId = user_id;
  }

  static async list() {
    const query = 'SELECT * FROM posts JOIN users ON posts.user_id = users.id';
    const { rows } = await knex.raw(query);
    return rows.map((post) => new Post(post));
  }

  static async find(id) {
    const query = 'SELECT * FROM posts JOIN users ON posts.user_id = users.id WHERE posts.id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const post = rows[0];
    return post ? new Post(post) : null;
  }

  static async findByUserId(userId) {
    const query = 'SELECT * FROM users JOIN users ON posts.user_id = users.id WHERE posts.user_id = ?';
    const args = [userId];
    const { rows } = await knex.raw(query, args);
    return rows.map((post) => new Post(post));
  }

  static async create(postPicture, postDescription, userId) {
    const query = `INSERT INTO post (post_picture, post_description, user_id) VALUES (?, ?, ?) RETURNING *`;
    const args = [postPicture, postDescription, userId];
    const { rows } = await knex.raw(query, args);
    const createdPost = rows[0];
    return new Post(createdPost);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE posts;');
  }

  update = async ({postPicture, postDescription}) => { // dynamic queries are easier if you add more properties
    const rows = await knex('posts')
      .where({ id: this.id })
      .update({ postPicture, postDescription })
      .returning('*');

    const updatedPost = rows[0];
    return updatedPost ? new Post(updatedPost) : null;
  };
}

module.exports = Post;
