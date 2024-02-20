/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const materials = [
  {
   material_name: 'Milk Carton',
  },
  {
    material_name: 'Jeans',
  },
  {
    material_name: 'Mason Jars',
  },
  {
    material_name: 'NewsPaper/Magazine',
  },
  {
    material_name: 'Fabric Scraps',
  },
  {
    material_name: 'Cans',
  },
];
exports.seed = async function(knex) {
  await knex('materials').del()
  await knex('materials').insert(materials);
};
