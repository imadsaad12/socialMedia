import React from "react";
import CreatePost from "./CreatePost/index";
import Post from "./Post/index";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "70%",
    height: `calc(100vh - ${70}px)`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listPost:{
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
     marginTop: "3%",
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#004c92",
      outline: "1px solid slategrey",
    },
  }
});
const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CreatePost />
      <div
        className={classes.listPost}
      >
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Index;
