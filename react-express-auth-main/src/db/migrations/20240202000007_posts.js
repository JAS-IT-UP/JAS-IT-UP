/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.string('post_picture').notNullable();
        table.string('project_desription').notNullable();
        table.foreign('user_id').references('id').inTable('users');
        table.timestamps(true, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('posts');
