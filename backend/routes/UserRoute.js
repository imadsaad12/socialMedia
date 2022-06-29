const express = require("express")
const route = express.Router();
const userController = require("../controllers/UserController")

route.post("/login", userController.login);

route.post("/signup", userController.signup);

route.get("/:id", userController.getUser);

route.put("/:id", userController.updateUser);

route.delete("/:id", userController.deleteUser);

route.put("/userBefriend", userController.userBefriend);

route.put("/userUnfriend", userController.userUnfriend);

route.post("/", userController.getAllUsers);

route.get("/getAllMyPosts/:id", userController.getAllMyPosts);


module.exports = route;