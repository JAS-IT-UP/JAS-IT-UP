/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const post_materials = [
  {
    count:1,
    post_id:1,
    material_id:2,
  },
  {
    count:1,
    post_id:1,
    material_id:3,
  }
  {
    count:1,
    post_id:2,
    material_id:1,
  }
];
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('post_materials').del()
  await knex('post_materials').insert(post_materials);
};
