const knex = require('../knex');

class Post {

  // Why have a constructor here? We need a way to take the raw data returned from
  // the database and hide the passwordHash before sending it back to the controller
  constructor({ id, post_picture, project_description, user_id }) {
    this.id = id;
    this.postPicture = post_picture;
    this.projectDescription = project_description;
    this.userId = user_id
  }

  static async list() {
    const query = 'SELECT * FROM posts';
    const { rows } = await knex.raw(query);
    return rows.map((user) => new Post(post));
  }

  static async find(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = ?';
    const args = [username];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async create(count, postId, materialId) {

    const query = `INSERT INTO post_materials (count, post_id, material_id) VALUES (1, 123, 456)`;
    const args = [count, postId, materialId];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return new Post(post);
  }

  static async deleteAll() {
    return knex.raw('TRUNCATE users;');
  }

  update = async (username) => { // dynamic queries are easier if you add more properties
    const rows = await knex('users')
      .where({ id: this.id })
      .update({ username })
      .returning('*');

    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
