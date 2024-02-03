/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const materials = [
  {
   material_name: 'Paper',
  },
  {
    material_name: 'Plastic',
  },
];
exports.seed = async function(knex) {
  await knex('materials').del()
  await knex('materials').insert(materials);
};
