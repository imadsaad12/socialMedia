const User = require("../models/Users");
const Posts = require("../models/Posts");

const bcrypt = require("bcrypt");


const login = async (req, res) => {

    try {
        const data = req.body;

        const user = await User.findOne({ email: data.email });
        if (!user) return res.status(400).send('Invalid Email or Password.')

        const validPassword = await bcrypt.compare(data.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid Email or Password.')

        return res.json({ id: user._id }).send("Logged in");

    } catch (error) {
        console.log(error);
    }
}

const signup = async (req, res) => {
    const data = req.body;
    const newUser = await User.findOne({ email: data.email });
    if (newUser) {
        res.status(400).send("User already exists");
    }
    else {
        try {
            const pass = data.password;
            var user
            const salt = await bcrypt.genSalt(10)

            user = await new User({

                firstname: data.firstname,
                lastname: data.lastname,
                username: data.username,
                email: data.email,
                password: await bcrypt.hash(pass, salt),
                age: data.age
            });
            await user.save();

            return res.json({ id: user._id });
        } catch (error) {
            console.log(error)
        }
    }
}

const getUser = async (req, res) => {
    try {

        const id = req.params.id;

        const user = await User.findById(id);
        if (!user) return res.status(400).send('User not found.');

        return res.json(user).send("User found");
    } catch {
        return res.send("Failed to search for a user");
    }
}

const deleteUser = async (req, res) => {
    try {
        const myPosts = await Posts.find({ userId: req.params.id })
        if(myPosts){
            await Posts.deleteMany({userId:req.params.id}, function(err) {})
        }

        const user = await User.findById(req.params.id)
        if (!user)
            return res.status(404).send("Account not found")
        userFriends = user.friends

        for (const friendId of userFriends) {
            // console.log(friendId);
            await User.findByIdAndUpdate(friendId, { $pull: { friends: req.params.id } })

            postsFriend = await Posts.find({ userId: friendId })


            for (const post of postsFriend) {
                likeFriends = post.UsersLike
                
                for (const likeId of likeFriends) {
                    if (likeId == req.params.id) {
                        console.log(likeId + " : " + post._id)
                        postLikes = post.number_of_Likes - 1
                        await Posts.findByIdAndUpdate(post._id, {
                            $pull: { UsersLike: likeId }, number_of_Likes : postLikes 
                        })
                    }
                }
            }
        }
        await User.findByIdAndDelete(req.params.id)
        return res.status(200).send("Account deleted successfully")
    } catch (error) {
        console.log(error)
    }
}

const updateUser = async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body })
        return res.status(200).send("Successfuly updated")
    } catch (error) {
        console.log(error)
        return res.status(500).send("Update failed")
    }
}

const userBefriend = async (req, res) => {

    if (req.query.id === req.query.id2)
        return res.status(500).send("You cannot befriend yourself")

    const user_2 = await User.findById(req.query.id)
    const currentUser = await User.findById(req.query.id2)

    try {
        if (currentUser.friends.includes(user_2._id))
            return res.status(500).send("Already friends")

        currentUser.friends.push(user_2._id)
        user_2.friends.push(currentUser._id)
        await currentUser.save()
        await user_2.save()
        return res.status(200).send("Friending Success")
    } catch (error) {
        console.log(error)
        return res.status(400).send("error")
    }

}

const userUnfriend = async (req, res) => {
    if (req.query.id === req.query.id2)
        return res.status(500).send("You cannot Unfriend yourself")

    const user_2 = await User.findById(req.query.id)
    const currentUser = await User.findById(req.query.id2)

    if (!currentUser.friends.includes(user_2._id))
        return res.status(500).send("Already not friends")

    await currentUser.updateOne({ $pull: { friends: user_2._id } })
    await user_2.updateOne({ $pull: { friends: currentUser._id } })
    return res.status(200).send("Unfriending Success")
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(400).send('No users');
        }
        return res.json(users);
    } catch (error) {
        console.log(error)
    }
}

//getAllMyPosts
const getAllMyPosts = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        const posts = await Posts.find({ userId: id })
        if (!user)
            return res.status(404).send("user not found")
        if (!posts)
            return res.status(404).send("no posts available")
        return res.status(200).json(posts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    login,
    signup,
    getUser,
    deleteUser,
    updateUser,
    userBefriend,
    userUnfriend,
    getAllUsers,
    getAllMyPosts
}