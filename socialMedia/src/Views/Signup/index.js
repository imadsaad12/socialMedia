import React, { useState } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles((theme)=>{
    return{
  root: {
    display: "flex",
    backgroundImage: `url('https://40obml2t8u691fd442y9pg71-wpengine.netdna-ssl.com/wp-content/uploads/login-page-bg.jpg')`,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  container: {
    width: "25%",
    height: "70%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    background: "#c2d0d1",
    [theme.breakpoints.down('sm')]:{
        width: "50%",
    }

  },
  header: {
    marginTop: "10%",
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "Segoe UI",
  },
  inptDiv: {
    width: "70%",
    height: "30px",
    alignSelf: "center",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inpt: {
    border: "none",
    marginLeft: "3%",
    "&:focus": {
      outline: "none",
    },
    width: "90%",
    background: "transparent",
  },
  btn: {
    width: "50%",
    alignSelf: "center",
    marginTop: "5%",
    fontSize: "12px",
  },
  link: {
    marginTop: "3%",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "12px",
  },
  copyRight: {
    textAlign: "center",
    fontSize: "10px",
    color: "gray",
   marginTop:"20%"
  },
}});
const Index = () => {
  const classes = useStyles();
  const [form, setform] = useState();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setform({...form,[name]:value})
  }
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.header}>create account</Typography>
        <div className={classes.inptDiv} style={{ marginTop: "15%" }}>
          <PermIdentityIcon color="primary" />
          <input className={classes.inpt} placeholder="username" name="username" onChange={handleChange} />
        </div>
        <div className={classes.inptDiv} style={{ marginTop: "5%" }}>
          <MailOutlineIcon color="primary" />
          <input type="email" className={classes.inpt} placeholder="email" name="email" onChange={handleChange}/>
        </div>
        <div className={classes.inptDiv} style={{ marginTop: "5%" }}>
          <LockIcon color="primary" />
          <input type="password" className={classes.inpt} placeholder="password" name="password" onChange={handleChange}/>
        </div>
        <Button variant="contained" className={classes.btn} color="primary">
          sign up
        </Button>
       
        <Typography className={classes.copyRight}>
          All rights reserved © Copyright 2022 | codelogists
        </Typography>
      </div>
    </div>
  );
};

export default Index;
