import * as React from "react";
import HPex from "../images/HPex.jpeg";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hpContainer: {
    width: "100vw",
    height: "100vh",
    // border: "3px solid red",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "Spectral Sc",
  },
  bgImage: {
    // border: "3px solid yellow",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  hpGrid: {
    //border: "3px solid green",
    fontSize: "8px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "36px",
    },
    position: "absolute",
    alignItems: "center",
  },
  hpName: {
    //border: "3px solid blue",
    textAlign: "center",
    fontSize: "3em",
    fontFamily: "Spectral Sc",
  },
  hpButton: {
    marginTop: "20px",
    fontSize: "1.5em",
    padding: "0.5em 1.25em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.5em",
      padding: "1em 2em",
    },
    backgroundColor: "rgba(255, 255, 255, 0.61)",
  },
}));
//<img src={HPex} className={classes.bgImage} />
const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.hpContainer}>
      <Grid container direction="column" className={classes.hpGrid}>
        <Typography className={classes.hpName}> Charlene Osmond </Typography>
        <button className={classes.hpButton}> ENTER </button>{" "}
      </Grid>
    </div>
  );
};

export default HomePage;
