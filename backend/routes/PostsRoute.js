const express = require("express")
const route = express.Router();
const postController = require("../controllersController")

route.post("/:id", postController.addPost);

route.get("/:id", postController.getPost);

route.put("/:id", postController.updatePost);

route.delete("/:id", postController.deletePost);

route.put("/likePost", postController.likePost);

route.put("/unLikePost", postController.unlikePost);

route.get("/", postController.getAllPosts);

module.exports = route;