const users = require('../db/models/user.js');
const posts = require('../db/models/post.js');
const saved_posts = require('../db/models/savedPost.js');
const post_materials = require('../db/models/postMaterial.js');
const materials = require('../db/models/material.js');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    users, 
    posts,
    saved_posts,
    post_materials,
    materials
  };
  next();
};

module.exports = addModelsToRequest;
