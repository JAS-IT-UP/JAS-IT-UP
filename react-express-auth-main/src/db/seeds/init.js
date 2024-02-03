/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
*/
const users = [
  {
    profile_picture: '.blob/cool_cat',
    first_name: 'Cool',
    last_name: 'Cat',
    username: 'cool_cat',
    email: 'XOvL7@example.com',
    password_hash: '1234',
  },
  {
    profile_picture: '.blob/cool_cat',
    first_name: 'Happy',
    last_name: 'Feet',
    username: 'happy_feet',
    email: 'happy@example.com',
    password_hash: '1334',
  },
];
exports.seed = async (knex) => {
    await knex('users').del();
    await knex('users').insert(users);
  };
