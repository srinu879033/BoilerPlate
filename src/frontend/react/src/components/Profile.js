import React from "react";
import { makeStyles } from "@mui/styles"; //function which allows JS to style components
import profileStyles from "../assets/jss/profileStyles"; //importing the style objects for the component

const useStyles = makeStyles(profileStyles); //this helps in converting Js objects to CSS

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileContainer}>
      My name is Joe Biden and working as an Intern in Fractal
    </div>
  );
};

export default Profile;
