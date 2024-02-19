/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable("post_materials", (table) => {
    table.increments("id").primary();
    table.integer("count").notNullable();
    table.integer("post_id").unsigned().notNullable();
    table.integer("material_id").unsigned().notNullable();

    table.foreign("post_id").references("id").inTable("posts");
    table.foreign("material_id").references("id").inTable("materials");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("post_materials");
