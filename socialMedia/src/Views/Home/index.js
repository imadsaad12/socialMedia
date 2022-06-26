import React from "react";
import NavBar from "../../components/NavBar/index";
import LeftBar from "../../components/LeftBar/index";
import Content from "./Content/index";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "row",
  },
});
const Index = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <div className={classes.content}>
        <LeftBar />
        <Content />
        {/* <LeftBar  /> */}
      </div>
    </div>
  );
};

export default Index;
