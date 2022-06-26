import React from "react";
import ReadMoreReact from "read-more-react";
import {
  makeStyles,
  Avatar,
  Typography,
  ListItemText,
  ListItemAvatar,
  ListItem,
  Button,
} from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    width: "80%",
    border: "1px solid black",
    height: "100%",
    marginTop: "2%",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },
  bodyContainer: {
    width: "80%",
    height: "60%",
    alignSelf: "center",
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
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  bodyData: {
    fontSize: "15px",
    fontWeight: "bold",
  },
  btnContainer: {
    width: "100%",
  },
  btnLike: {
    width: "50%",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "0px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  },
  btnLove: {
    width: "50%",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "10px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
  },
  icon: {
    paddingRight: "3%",
  },
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
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.image} />
          </ListItemAvatar>
          <ListItemText primary={user.username} secondary={user.email} />
        </ListItem>
      </div>
      <div className={classes.bodyContainer}>
        <Typography className={classes.bodyData}>
          <ReadMoreReact
            min={120}
            ideal={150}
            readMoreText={"read more . . ."}
            text={
              "echo# socialMedia README.md git init git add README.md git a README.md git init git add # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA README.md git a README.md git init git add README.md git a README.md git init git add README.md git commit-m fir main git remote add originhttps://github.com/imadsaad12/socialMedia.git git push -u origin maingit remote add origin https://github.com/imadsaad12/socialMedia.gitgit branch -M main git push -u origin main echo# socialMedia README.md git init git add README.md git a README.md git init git add # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA # socialMedia README.md git init git add README.md git a README.md git init git add README.md git a REA README.md git a README.md git init git add README.md git a README.md git init git add README.md git commit-m fir main git remote add originhttps://github.com/imadsaad12/socialMedia.git git push -u origin maingit remote add origin https://github.com/imadsaad12/socialMedia.gitgit branch -M main git push -u origin mai"
            }
          />
        </Typography>
      </div>
      <div></div>
      <div className={classes.btnContainer}>
        <Button variant="contained" color="primary" className={classes.btnLike}>
          <ThumbUpIcon className={classes.icon} />
          100
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnLove}
        >
          <FavoriteBorderIcon className={classes.icon} />
          200
        </Button>
      </div>
    </div>
  );
};

export default Index;
