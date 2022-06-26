const Posts = require("../models/Posts");
const Users = require("../models/Users");
const mongoose = require("mongoose");

const addPost = async (req, res) => {
    try {
        const usrId = req.params.id
        const data = req.body
        const user = await Users.findById(usrId)
        if (((!data.text || data.text === "") && (!data.Photo || data.Photo === "")) || !user)
            return res.status(400).send("wrong data !")

        const post = new Posts({
            text: data.text,
            Photo: data.Photo,
            userId: usrId
        })

        if (!post)
            return res.status(500).send("Failed to create post")

        await post.save()
        // await user.updateOne({ $push: { posts: post } })
        return res.status(200).send("Created post")
    } catch (error) {
        return res.status(400).send("Failed to save post")
    }
}

//get post
const getPost = async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id)
        const user = await Users.findById(req.body._id)
        if (!user)
            return res.status(404).send("User not found")
        if (!post)
            return res.status(404).send("post not available")

        if (mongoose.Types.ObjectId(user._id) !== mongoose.Types.ObjectId(post._id))
            return res.status(400).send("Unauthenticated Access")
        return res.status(200).json(post)
    } catch (error) {
        console.log(error)
    }
}

//update post
const updatePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.body._id)
        const user = await Users.findById(req.params.id)
        if (!user)
            return res.status(404).send("User not found")
        if (!post)
            return res.status(404).send("post not available")
        if (post.userId.toString !== user._id.toString)
            return res.status(400).send("Unauthenticated Access")

        // await Posts.findByIdAndUpdate(post._id, req.body)
        await post.updateOne(req.body)
        const newPost = await Posts.findById(post._id)
        return res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
    }

}

//delete post
const deletePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.body._id)
        const user = await Users.findById(req.params.id)
        if (!user)
            return res.status(404).send("User not found")
        if (!post)
            return res.status(404).send("post not available")
        if (post.userId.toString != user._id.toString)
            return res.status(400).send("Unauthenticated Access")
        await post.deleteOne()
        return res.status(200).send("Delete success")
    } catch (error) {
        console.log(error)
    }

}

//like post
const likePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.body._id)
        const currentU = await Users.findById(req.params.id)

        if (!currentU)
            return res.status(404).send("User not found")
        if (!post)
            return res.status(404).send("post not available")

        if (post.UsersLike && post.UsersLike.includes(currentU._id))
            return res.status(400).send("Already liked post")
        const newLikes = post.number_of_Likes + 1

        await Posts.findByIdAndUpdate(post._id, { $push: { UsersLike: currentU._id }, number_of_Likes: newLikes })
        const newPost = await Posts.findById(post._id)
        return res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
    }
    //update post in user
}

//unlike post
const unlikePost = async (req, res) => {
    try {
        const post = await Posts.findById(req.body._id)
        const currentU = await Users.findById(req.params.id)

        if (!currentU)
            return res.status(404).send("User not found")
        if (!post)
            return res.status(404).send("post not available")

        if (!post.UsersLike || !post.UsersLike.includes(currentU._id)){
            return res.status(400).send("Already unliked post")
        }
        const newLikes = post.number_of_Likes - 1

        await Posts.findByIdAndUpdate(post._id, { $pull: { UsersLike: currentU._id }, number_of_Likes: newLikes })
        const newPost = await Posts.findById(post._id)
        return res.status(200).json(newPost)
    } catch (error) {
        console.log(error)
    }
}

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        if (!posts) {
            return res.status(400).send('No users');
        }
        return res.json(posts).send("Users found");
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addPost,
    getPost,
    updatePost,
    deletePost,
    likePost,
    unlikePost,
    getAllPosts
}