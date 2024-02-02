/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('saved_posts', (table) => {
        table.increments();
        table.integer('post_id').notNullable().references('id').inTable('posts');
        table.integer('user_id').notNullable().references('id').inTable('users');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('saved_posts');
