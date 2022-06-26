const mongoose = require("mongoose");
const postsSchema = new mongoose.Schema({
    text: {
        type: String,
        default: ""
    },
    number_of_Likes: {
        type: Number,
        default: 0
    },
    Photo: {
        type: String,
        default: ""
    },
    UsersLike: [
        {
            type: String
        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: true
});


// define collection to the user schema
//define collection to the user schema
const Posts = mongoose.model("posts", postsSchema);
// export schema to use it in index.js
module.exports = Posts;