import * as React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContainer from "./SidebarContainer.tsx";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: 300,
  },
}));

const MainSidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isShowing, setShowing] = useState(false);
  const toggleShowing = () => {
    if (isShowing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  };

  return (
    <div className={classes.main}>
      <SidebarContainer isShowing={isShowing} toggleShowing={toggleShowing} />
      <ArrowForwardIosIcon
        //className={classes.hambIcon}
        onClick={toggleShowing}
        style={{
          display: isShowing ? "none" : "block",
          marginLeft: useMediaQuery(theme.breakpoints.up("sm"))
            ? "30px"
            : "15px",
          marginTop: useMediaQuery(theme.breakpoints.up("sm"))
            ? "30px"
            : "20px",
          fontSize: useMediaQuery(theme.breakpoints.up("sm")) ? 40 : 30,
        }}
      />
    </div>
  );
};
export default MainSidebar;
