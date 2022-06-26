const express = require("express")
const route = express.Router();
const postController = require("../controllers/PostsController")

route.post("/addPost/:id", postController.addPost);

route.post("/getPost/:id", postController.getPost);

route.put("/updatePost/:id", postController.updatePost);

route.delete("/deletePost/:id", postController.deletePost);

route.put("/likePost/:id", postController.likePost);

route.put("/unLikePost/:id", postController.unlikePost);

route.post("/getAllPosts", postController.getAllPosts);

module.exports = route;