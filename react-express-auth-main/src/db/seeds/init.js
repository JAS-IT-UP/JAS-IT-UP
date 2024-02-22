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
    post_picture: '.blob/Vintage Scarf Dress',
    project_description: `Select Scarves: Gather a selection of vintage scarves in various colors, patterns, and textures. Choose scarves that are in good condition and complement each other well.
      1. Measure and Plan: Decide on the length and style of your dress. Measure from your shoulder to your desired hemline to determine the length of each scarf. Keep in mind that vintage scarves may vary in size, so you may need to adjust your design accordingly.
      2. Cut Scarves: Using scissors, carefully cut each scarf to the desired length for your dress. You may need to cut some scarves horizontally to achieve the desired width for the bodice, waist, and skirt sections.
      3. Arrange Scarves: Lay out the scarves in the order you'd like them to appear on your dress. Experiment with different combinations until you're satisfied with the overall look.
      4. Sew Scarves Together: With right sides facing each other, pin the scarves together along the edges to create the bodice, waistband, and skirt sections of the dress. Use a sewing machine or needle and thread to stitch the scarves together along the pinned seams. Backstitch at the beginning and end of each seam to secure the stitches.
      5. Fit and Adjust: Once the bodice, waistband, and skirt sections are sewn together, try the dress on to check the fit. Make any necessary adjustments to the seams or length of the dress.
      6. Final Touches: Once the dress is complete and fits to your satisfaction, give it a final press with an iron if needed. Trim any loose threads, and your vintage scarf dress is ready to wear!
      7. Accessorize: Pair your upcycled vintage scarf dress with your favorite accessories to complete the look. Consider adding a belt, statement jewelry, or a cute pair of shoes to accentuate your outfit.`,
    user_id:2,
  },
  {
    material_id: 5,
    post_picture: '.blob/oldTShirtBag',
    project_description: `Upcycle Denim Jeans: Turn old jeans into new items like denim skirts, shorts, or aprons. You can also use denim scraps to make coasters, placemats, or even patchwork quilts. 
      1. Select the Shirt: Choose an old T-shirt that you no longer wear but still has a sturdy fabric. The size of the shirt will determine the size of your tote bag. Larger shirts will make larger bags.
      2. Prepare the Shirt: Lay the T-shirt flat on a surface. Smooth out any wrinkles or folds. Ensure that the shirt is clean and free from stains.
      3. Mark and Cut: Decide how deep you want your bag to be and mark a straight line across the shirt, just below the sleeves. You can use a ruler to ensure accuracy. Then, cut off the bottom part of the shirt along the marked line. Set aside the top part with sleeves for now; you'll use it later.
      4. Create the Handles: Decide how long you want your bag handles to be. Mark two points on each side of the shirt's opening where you want the handles to begin. Cut straight lines from these points towards the bottom edge of the shirt, creating strips for the handles. Make sure to keep them even on both sides.
      5. Tie the Handles: Take two strips of fabric from each side and tie them together in knots. Repeat this process for the remaining strips, ensuring all handles are securely tied.
      6. Finish the Bag: Turn the shirt inside out, and if desired, you can use a sewing machine or needle and thread to stitch the bottom edge of the bag closed for added durability. Alternatively, you can use fabric glue to seal the bottom edge.
      7. Final Touches: Once any glue or paint has dried completely, turn the bag right side out. Your upcycled T-shirt tote bag is now ready to be used for shopping, carrying books, or any other purpose you have in mind!`,
    user_id:1,
  },
  {
    material_id: 3,
    post_picture: '.blob/Upcycled Magazine Coasters',
    project_description: `Upcycle Old Shirts: Turn old t-shirts into new items like t-shirts, sweatshirts, or even turtlenecks. You can also use old shirt buttons to make turtleneck buttons.
      1. Start by gathering old magazines or colorful paper. Choose pages with interesting designs, colors, or patterns. Additionally, gather cork sheets or felt sheets to serve as the backing for the coasters.
      2. Cutting the Paper: Using scissors, cut out squares or circles from the magazine pages. These will be the surface of your coasters. You can choose to make them all uniform in size or vary them for a more eclectic look.
      3. Prepare the Base: Cut out squares or circles from the cork or felt sheets, making them slightly smaller than the paper cutouts. These will serve as the backing for your coasters.
      4. Assemble the Coasters: Apply a thin layer of Mod Podge or white glue onto the cork or felt backing using a foam brush or regular paintbrush. Place the magazine cutouts on top of the glued surface, ensuring they adhere smoothly and there are no air bubbles.
      5. Final Touches: Let the coasters dry completely before using them. Once dry, you can stack them up and use them to place your drinks on.`,
    user_id:2,
  },
  {
    material_id: 4,
    post_picture: '.blob/Mason Jar Chandelier',
    project_description: `
      1. Prepare the Frame: If you're using a pre-made frame, ensure it's clean and ready for assembly. If you're making your own frame, cut and assemble the wooden or metal pieces according to your design. Sand the edges if you want a distressed look.
      2. Position the Mason Jars: Determine the placement of the mason jars on the frame. You can evenly space them apart or arrange them in a pattern, depending on your preference. Mark the spots where the jars will be attached.
      3. Attach the Mason Jars: Using wire or metal brackets, securely attach the mason jars to the frame at the marked spots. Make sure they are firmly in place and won't come loose when the chandelier is hanging.
      4. Wire the Pendant Lights: Follow the instructions provided with the pendant light kits to wire the sockets and bulbs. Strip the wires and connect them to the corresponding terminals on the sockets using wire nuts. Test each light to ensure it's working properly before proceeding.
      5. Thread the Wires: Carefully thread the wires through the frame, positioning them so they are hidden from view. Be sure to leave enough slack for connecting them to the ceiling canopy later.
      6. Hang the Chandelier: Attach a ceiling hook or hardware to the ceiling at the desired location for your chandelier. Hang the chandelier from the hook, making sure it's level and secure.
      7. Connect the Wires: Connect the wires from the pendant lights to the corresponding wires on the ceiling canopy. Use wire nuts to secure the connections and ensure there are no exposed wires.
      8. Secure the Canopy: Attach the ceiling canopy to the ceiling, covering the electrical connections. Use screws or other hardware provided with the canopy to secure it in place.
      9. Test the Chandelier: Turn on the power and test the chandelier to make sure all the lights are functioning correctly. Adjust any loose connections or uneven spacing as needed.
      10. Final Touches: Once everything is in place and working properly, give your mason jar chandelier a final inspection. Make any necessary adjustments and add decorative elements if desired.`,
    user_id:1,
  },
];

const saved_posts = [
  {
    post_id: 1,
    user_id: 2,
  },
  {
    post_id: 2,
    user_id: 1,
  },
  {
    post_id: 3,
    user_id: 1,
  },
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
 