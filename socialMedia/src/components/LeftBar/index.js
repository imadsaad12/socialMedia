import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    height: `calc(100vh - ${70}px)`,
    width: "19%",
    borderRight: "1px solid lightgray",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "30px",
    fontFamily: " Redressed",
    marginLeft: "15%",
    marginTop: "3%",
  },
  list:{
    width:"100%",
  }
});
const Index = () => {
  const classes = useStyles(0);
  const users = [
    {
      username: "Imad saad",
      image:
        "https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=2000",
      email: "imad.saad123@gmail.com",
    },
    {
      username: "Ali hashem",
      image:
        "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
      email: "hashem.ali-IT@gmail.com",
    },
    {
      username: "Hassan Awwad ",
      image:
        "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      email: "thorTrol.Awwad@gmail.com",
    },
    {
      username: "Hadi Tziz",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      email: "Tizi-Hadi-saab@gmail.com",
    },
    {
      username: "Bassel Nazario da Lema",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe-nDXn1Xg8qOP0odcLuOkPZ7kpLzeGI-3FQ&usqp=CAU",
      email: "Bench+infinite@gmail.com",
    },
    {
      username: "Hadi Sayed Nouredine",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      email: "Hadi-313@gmail.com",
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.header}>Friends</div>
      <div>
        <List>
          {users.map((i, index) => {
            return (
              <ListItem key={index} className={classes.list}>
                <ListItemAvatar>
                  <Avatar src={i.image} />
                </ListItemAvatar>
                <ListItemText primary={i.username} secondary={i.email} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default Index;
