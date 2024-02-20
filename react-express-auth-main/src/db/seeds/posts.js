/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const posts = [
  {
    post_picture: '.blob/jeanPottery',
    project_description: `Join me on a creative journey as we breathe new life into old denim jeans! 🌿 In this DIY project, I will show you how to upcycle your worn-out denim into charming plant holders, perfect for adding a touch of greenery to any space. Not only will you be reducing waste and giving your old jeans a second chance, but you'll also be adding a unique and eco-friendly flair to your home decor.
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
    post_picture: '.blob/paper',
    project_description: 'This is a description for paper',
    user_id:2,
  },
  {
    post_picture: '.blob/wood',
    project_description: 'This is a description for wood',
    user_id:2,
  }
];
exports.seed = async function(knex) {
  await knex('posts').del()
  await knex('posts').insert(posts);
};
