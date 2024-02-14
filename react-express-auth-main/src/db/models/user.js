const knex = require("../knex");
const { hashPassword, isValidPassword } = require("../../utils/auth-utils");

class User {
  #passwordHash = null; // a private property

  // Why have a constructor here? We need a way to take the raw data returned from
  // the database and hide the passwordHash before sending it back to the controller
  constructor({
    id,
    profile_picture,
    first_name,
    last_name,
    username,
    email,
    password_hash,
  }) {
    this.id = id;
    this.profilePicture = profile_picture;
    this.firstName = first_name;
    this.lastName = last_name;
    this.username = username;
    this.email = email;
    this.#passwordHash = password_hash;
  }

  static async list() {
    const query = "SELECT * FROM users";
    const { rows } = await knex.raw(query);
    // use the constructor to hide each user's passwordHash
    return rows.map((user) => new User(user));
  }

  static async find(id) {
    const query = "SELECT * FROM users WHERE id = ?";
    const args = [id];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return user ? new User(user) : null;
  }

  static async findByUsername(username) {
    const query = "SELECT * FROM users WHERE username = ?";
    const args = [username];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    console.log(user, "this is the find by username : data from db")
    return user ? new User(user) : null;
  }

  static async create({
    profilePicture,
    firstName,
    lastName,
    username,
    email = "test",
    password, 
  }) {


    const passwordHash = await hashPassword(password);

    const query = `INSERT INTO users (profile_picture, first_name, last_name, username, email, password_hash)
      VALUES (?, ?, ?, ?, ?, ?) RETURNING *`;
    const args = [
      profilePicture,
      firstName,
      lastName,
      username,
      email,
      passwordHash,
    ];
    const { rows } = await knex.raw(query, args);
    const user = rows[0];
    return new User(user);
  }

  static async deleteAll() {
    return knex.raw("TRUNCATE users;");
  }

  update = async ({ profilePicture, username }) => {
    // dynamic queries are easier if you add more properties
    if (!profilePicture && !username) {
      return null;
    }

    const updateUser = {};

    if (profilePicture) {
      updateUser.profile_picture = profilePicture;
    }

    if (username) {
      updateUser.username = username;
    }

    const rows = await knex("users")
      .where({ id: this.id })
      .update(updateUser)
      .returning("*");

    const updatedUser = rows[0];
    return updatedUser ? new User(updatedUser) : null;
  };

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}


module.exports = User;
