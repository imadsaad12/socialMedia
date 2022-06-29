const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./Routes/UserRoute");
const postRoute = require("./Routes/PostsRoute");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());
mongoose
    .connect(
        process.env.MONGODB_URL
    )
    .then((res) => {
        app.listen(process.env.PORT, () => {
            console.log("Sever is now running . . .");
        });
    })
    .catch((err) => {
        console.log(err);
    });

//routes
app.use("/users", userRoute);
app.use("/posts", postRoute);
