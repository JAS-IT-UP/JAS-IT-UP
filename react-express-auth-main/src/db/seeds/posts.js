/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const posts = [
  {
    post_picture: '.blob/plastic',
    material_name: 'Milk Carton',
    project_description: 'This is a description for steel',
    user_id:1,
  },
  {
    post_picture: '.blob/paper',
    material_name: 'Jeans',
    project_description: 'This is a description for paper',
    user_id:2,
  },
];
exports.seed = async function(knex) {
  await knex('posts').del()
  await knex('posts').insert(posts);
};
