/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const saved_posts = [
  {
    post_id: 1,
    user_id: 1,
  }
]
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('saved_posts').del()
  await knex('saved_posts').insert(saved_posts);
};
