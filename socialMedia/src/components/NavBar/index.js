import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flesDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    background: "#014b92",
  },
  icon:{
    fontSize:"25px",
    color: "#c2d0d1",
  },
  btnContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    height: "70px",
  },
  btn: {
    color: "#c2d0d1",
    width: "10%",
    fontWeight: "bold",
    fontFamily: "Segoe UI",
    "&:hover": {
      background: "transparent",
      color: "white",
    },
  },
});
const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.btnContainer}>
        <HomeIcon className={classes.icon} />
        <Button className={classes.btn}>Home</Button>
      </div>
      <div className={classes.btnContainer}>
        <PersonIcon className={classes.icon} />
        <Button className={classes.btn}>Profile</Button>
      </div>
      <div className={classes.btnContainer}>
        <ExitToAppIcon className={classes.icon} />
        <Button className={classes.btn}>Logout</Button>
      </div>
     
    </div>
  );
};

export default Index;
