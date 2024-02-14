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
Router.get("/users/:id", userController.show);
Router.post("/users", userController.create);
Router.patch("/users/:id", userController.update);

Router.get("/posts", postController.list);
Router.post("/make_posts", checkAuthentication, postController.create);
Router.get("/post", postController.find);

Router.get("/saved_posts/:id", savedPostController.find);
Router.get("/saved_posts", savedPostController.list);
Router.post("/saved_posts", savedPostController.create);

Router.get("/materials", materialController.list);
Router.get("/materials/:id", materialController.find);
Router.post("/materials", materialController.create);

Router.get("/post_materials", postMaterialController.list);
Router.get("/post_materials/:id", postMaterialController.find);
Router.post("/post_materials", postMaterialController.create);
Router.patch("/posts/:id", postController.update);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);

Router.get('/me', checkAuthentication, userController.showMe);

Router.post('/make_posts', checkAuthentication, (require('./controllers/post')).create);
Router.get('/posts/:id', (require('./controllers/post')).find);
Router.delete('/posts/:id', checkAuthentication, (require('./controllers/post')).deletePost);
Router.delete('/saved_posts/:id', checkAuthentication, (require('./controllers/saved_posts')).deleteSavedPost);
Router.patch('/users/:id', checkAuthentication, (require('./controllers/user')).update);

module.exports = Router;
