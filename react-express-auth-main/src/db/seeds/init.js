/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
*/
const users = [
  {
    profile_picture: '.blob/cool_cat',
    first_name: 'Captain',
    last_name: 'Planet',
    username: 'Captain_Planet',
    email: 'cat@example.com',
    password_hash: '1234',
  },
  {
    profile_picture: '.blob/happy_feet',
    first_name: 'Happy',
    last_name: 'Feet',
    username: 'happy_feet_across_the_world',
    email: 'happy@example.com',
    password_hash: '1334',
  },
  {
    profile_picture: '.blob/world_saver',
    first_name: 'World',
    last_name: 'Saver',
    username: 'world_saver',
    email: 'world@example.com',
    password_hash: '1234',
  },
  {
    profile_picture: '.blob/Future_Fashion',
    first_name: 'Future',
    last_name: 'Fashion',
    username: 'Future_Fashion',
    email: 'future@example.com',
    password_hash: '1234',
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
    material_id: 1,
    post_picture: '.blob/jeanPottery',
    project_description: `Join me on a creative journey as we breathe new life into old denim jeans! :herb: In this DIY project, I will show you how to upcycle your worn-out denim into charming plant holders, perfect for adding a touch of greenery to any space. Not only will you be reducing waste and giving your old jeans a second chance, but you'll also be adding a unique and eco-friendly flair to your home decor.
      Step 1: Gather Your Materials
      Gather old denim jeans, scissors, needle and thread (or sewing machine), fabric glue (optional), small plants or succulents, potting soil, and small rocks or pebbles for drainage.
      Step 2: Prepare the Denim
      Cut the denim into desired shapes and sizes for your plant holders. You can use the pant legs or other parts of the jeans depending on the size and design you prefer. Consider incorporating pockets or decorative seams for added charm.
      Step 3: Sew or Glue the Denim
      Fold the denim pieces in half and sew along the edges, leaving the top open for the plant. If you're not comfortable with sewing, you can use fabric glue to secure the edges instead. Ensure the seams are sturdy enough to hold the weight of the soil and plant.
      Step 4: Add Drainage
      Place a layer of small rocks or pebbles at the bottom of each denim plant holder to create drainage for the plants. This will prevent water from pooling at the bottom and causing root rot.
      Step 5: Plant Your Succulents
      Fill each denim plant holder with potting soil and carefully plant your succulents or small plants. Make sure the plants are well-centered and supported by the soil. Water them lightly and place the holders in a sunny spot to thrive.`,
    user_id:1,
  },
  {
    material_id: 2,
    post_picture: '.blob/paperBeads',
    project_description: `One creative upcycling project that requires paper is making handmade paper beads. This project not only repurposes old newspapers, magazines, or junk mail but also results in unique and colorful beads that can be used for jewelry or decorative purposes. Here's how you can do it: Cut your paper material into long, narrow triangles. You can vary the size and shape of the triangles to create beads of different sizes.
      1. Starting from the wider end of the triangle, roll the paper tightly around a skewer or toothpick. Apply a thin layer of glue along the edge as you roll to secure the bead.
      2. Once you've rolled the entire triangle, apply a bit more glue to the end to ensure it stays in place.
      3. Carefully slide the bead off the skewer or toothpick and set it aside to dry. You can place it on wax paper or a non-stick surface to prevent it from sticking.
      4. Repeat the process with the remaining paper triangles until you have a collection of beads.
      5. Once the beads are dry, you can leave them as is for a rustic look or decorate them further with paints, markers, or glitter.
      6. Allow any additional decorations to dry completely before using the beads in your desired project.`,
    user_id:2,
  },
  {
    material_id: 5,
    post_picture: '.blob/oldTShirtBag',
    project_description: 'Turn Old T-Shirts into Tote Bags. Cut up old t-shirts and sew them into reusable tote bags. You can decorate them with fabric paint, patches, or embroidery for a personalized touch.',
    user_id:2,
  },
  {
    material_id: 5,
    post_picture: '.blob/oldTShirtBag',
    project_description: 'Upcycle Denim Jeans: Turn old jeans into new items like denim skirts, shorts, or aprons. You can also use denim scraps to make coasters, placemats, or even patchwork quilts.',
    user_id:1,
  },
];

const saved_posts = [
  {
    post_id: 1,
    user_id: 1,
  },
  {
    post_id: 2,
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
 