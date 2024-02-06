const User = require('../db/models/user');
const Post = require('../db/models/post');
const SavedPost = require('../db/models/savedPost');
const PostMaterial = require('../db/models/postMaterial');
const Material = require('../db/models/material');

const addModelsToRequest = (req, res, next) => {
  req.db = {
    User,
    Post,
    SavedPost,
    PostMaterial,
    Material
  };
  next();
};

module.exports = addModelsToRequest;
