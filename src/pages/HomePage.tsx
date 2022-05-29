import * as React from "react";
import HPweb from "../images/HPweb.jpg";
import HPmb from "../images/HPmb.jpg";
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hpContainer: {
    width: "100vw",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
    },
    //border: "3px solid red",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: "Spectral Sc",
    overflow: "hidden",
  },
  bgImage: {
    // border: "3px solid yellow",
    width: "100vw",
  },
  hpGrid: {
    //border: "3px solid green",
    fontSize: "8px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.up("md")]: {
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
    color: "white",
    textShadow: "5px 5px 5px black",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
  hpButton: {
    marginTop: "20px",
    fontSize: "1.5em",
    textShadow: "5px 5px 5px black",
    padding: "0.5em 1.25em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.8em",
      padding: "1em 2em",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.5em",
      padding: "1em 2em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "0.4em",
      padding: "0.75em 1.5em",
    },
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
    boxShadow: "2px 2px black",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const bgImage = useMediaQuery(theme.breakpoints.up("sm")) ? HPweb : HPmb;
  return (
    <div className={classes.hpContainer}>
      <img src={bgImage} className={classes.bgImage} />
      <Grid container direction="column" className={classes.hpGrid}>
        <Typography className={classes.hpName}> Charlene Osmond </Typography>
        <button className={classes.hpButton}> ENTER </button>{" "}
      </Grid>
    </div>
  );
};

export default HomePage;
