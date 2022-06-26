const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    birthDate: Date,
    address: String,
    phoneNumber: String,
    profilePic: {
        type: String,
        default: ""
    },
    coverPic: {
        type: String,
        default: ""
    },
    // posts: [
    //     Posts
    // ],
    friends: [
        mongoose.Schema.Types.ObjectId,
    ],
    school: String,
    work: String
}, {
    timestamps: true
});

// define collection to the user schema
//define collection to the user schema
const Users = mongoose.model("users", userSchema);
// export schema to use it in index.js
module.exports = Users;