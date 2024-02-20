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

const posts = [
  {
    post_picture: '.blob/jeanPottery',
    material_id: 1,
    project_description: "Join me on a creative journey",
    user_id:1,
  },
  {
    post_picture: '.blob/paper',
    material_id: 2,
    project_description: 'This is a description for paper',
    user_id:2,
  },
  {
    post_picture: '.blob/wood',
    material_id: 3,
    project_description: 'This is a description for wood',
    user_id:2,
  }
];

const saved_posts = [
  {
    post_id: 1,
    user_id: 1,
  }
]

exports.seed = async (knex) => {
  await knex('saved_posts').del();
  await knex('posts').del();
  await knex('users').del();
  await knex('materials').del();

  await knex('users').insert(users);
  await knex.raw('ALTER SEQUENCE materials_id_seq RESTART WITH 1');
  await knex('materials').insert(materials);
  await knex('posts').insert(posts);
  await knex('saved_posts').insert(saved_posts);
  };
