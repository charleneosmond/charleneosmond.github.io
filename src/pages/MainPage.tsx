import * as React from "react";
import MainSidebar from "../components/sidebar/MainSidebar.tsx";
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100vw",
    height: "100vh",
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
    },
    //border: "3px solid blue",
    overflow: "scroll",
  },
  nameContainer: {
    display: "flex",
    width: "100vw",
    height: "150px",
    alignItems: "center",
    //border: "3px solid red",
    justifyContent: "center",
  },
  nameText: {
    fontSize: "1em",
    fontFamily: "Spectral Sc",
  },
  contentContainer: {
    marginLeft: "100px",
  },
}));

const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <MainSidebar />
      <div className={classes.nameContainer}>
        {" "}
        <Typography className={classes.nameText}> Charlene Osmond</Typography>
      </div>
    </div>
  );
};

export default MainPage;
