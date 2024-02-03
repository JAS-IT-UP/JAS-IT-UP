/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const posts = [
  {
    post_picture: '.blob/plastic',
    project_description: 'This is a description for steel',
    user_id:1,

  },
  {
    post_picture: '.blob/paper',
    project_description: 'This is a description for paper',
    user_id:2,
  },
];
exports.seed = async function(knex) {
  await knex('posts').del()
  await knex('posts').insert(posts);
};
