/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const usersTable = (table) => {
  table.increments();
  table.string('profile_picture').notNullable();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('username').notNullable().unique();
  table.string('email').notNullable(); 
  table.string('password_hash').notNullable();
  table.timestamps(true, true);
}

const materialsTable = (table) => {
  table.increments('id').primary();
  table.string('material_name').notNullable();
}

const postsTable = (table) => {
  table.increments('id').primary();
  table.string('post_picture').notNullable();
  table.string('project_description').notNullable();
  table.integer('material_id').unsigned();
  table.integer('user_id').unsigned();
  table.foreign('material_id').references('id').inTable('materials');
  table.foreign('user_id').references('id').inTable('users');
  table.timestamps(true, true);
}

const savedPosts = (table) => {
  table.increments();
  table.integer('post_id').notNullable().references('id').inTable('posts');
  table.integer('user_id').notNullable().references('id').inTable('users');
  table.timestamps(true, true);
}

exports.up = (knex) => knex.schema
.createTable('users', usersTable)
.createTable('materials', materialsTable)
.createTable('posts', postsTable)
.createTable('saved_posts', savedPosts)

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema
.dropTable('saved_posts')
.dropTable('posts')
.dropTable('users')
.dropTable('materials')

