const express = require('express');
const userController = require('./controllers/user');
const postController = require('./controllers/post');
const savedPostController = require('./controllers/saved_posts');
const postMaterialController = require('./controllers/post_materials');
const materialController = require('./controllers/materials');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModelsToRequest);

Router.get("/users", userController.list);
Router.get("/posts", postController.list);
Router.get("/saved_posts", savedPostController.list);
Router.get("/post_materials", postMaterialController.list);
Router.get("/materials", materialController.list);

Router.get("/materials/:id", materialController.find);
Router.get("/post", postController.find);
Router.get("/post_materials/:id", postMaterialController.find);
Router.get("/saved_posts/:id", savedPostController.find);

Router.get("/users/:id", userController.show);

Router.post("/users", userController.create);
Router.post("/createPost", checkAuthentication ,postController.create);
Router.post("/saved_posts", savedPostController.create);
Router.post("/post_materials", postMaterialController.create);
Router.post("/materials", materialController.create);

Router.patch("/users/:id", userController.update);
Router.patch("/posts/:id", postController.update);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.post('/posts', checkAuthentication, (require('./controllers/post')).create);
Router.get('/posts/:id', (require('./controllers/post')).find);
Router.delete('/posts/:id', checkAuthentication, (require('./controllers/post')).deletePost);
Router.delete('/saved_posts/:id', checkAuthentication, (require('./controllers/saved_posts')).deleteSavedPost);
Router.patch('/users/:id', checkAuthentication, (require('./controllers/user')).update);

module.exports = Router;
