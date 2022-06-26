import React from "react";
import { makeStyles, Avatar, Typography,ListItemText, ListItemAvatar,ListItem} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: "70%",
    border: "1px solid lightgray",
    height: "400px",
    // marginTop: "2%",
    borderTop:"0px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
  },
  post:{
    width: "60%",
    height:"50%",
    border: "1px solid black",
    alignSelf:"center",
    borderStyle:"dashed",
    borderBottomLeftRadius:"20px",
    borderBottomRightRadius:"20px",
    borderTopRightRadius:"20px",
  },
  textarea:{
    width:"90%",
    height:"90%",
    margin:"1%",
    outline:"none",
    border:"none",
    "&::placeholder":{
        padding:"10%"
    },
    backgroundColor:"transparent"
  }
});

const Index = () => {
  const classes = useStyles();
  const user = {
    username: "Imad saad",
    image:
      "https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000",
    email: "imad.saad123@gmail.com",
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.image} />
          </ListItemAvatar>
          <ListItemText primary={user.username} secondary={user.email} />
        </ListItem>
      </div>
      <div className={classes.post}>
        <textarea type="textarea" className={classes.textarea} placeholder="what you are thinking about now . . . "/>
      </div>
    </div>
  );
};

export default Index;
