const express = require("express")
const route = express.Router();
const userController = require("../controllers/UserController")

route.post("/login", userController.login);

route.post("/signup", userController.signup);

route.post("/getUser/:id", userController.getUser);

route.put("/updateUser/:id", userController.updateUser);

route.delete("/deleteUser/:id", userController.deleteUser);

route.put("/userBefriend/:id", userController.userBefriend);

route.put("/userUnfriend/:id", userController.userUnfriend);

route.post("/getAllUsers", userController.getAllUsers);

route.post("/getAllMyPosts/:id", userController.getAllMyPosts);


module.exports = route;