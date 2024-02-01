/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => { knex.schema.createTable('post_materials', (table) => {
    table.increments();
    table.integer('count').notNullable();

    table.integer('post_id');
    table.integer('material_id');

    table.foreign('post_id').references('id').inTable('posts');
    table.foreign('material_id').references('id').inTable('materials');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => { 
    return knex.schema.dropTable('post_materials');
};
