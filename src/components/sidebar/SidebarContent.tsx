import * as React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
    height: "65px",
    fontSize: "16px",
    fontFamily: "Spectral Sc",
    [theme.breakpoints.up("sm")]: {
      height: "80px",
      fontSize: "20px",
    },
    //border: "1px solid green",
    justifyContent: "center",
    alignItems: "flex-end",
  },
}));

const SidebarContent: React.FC<SidebarContentProps> = (props) => {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classes.main} onClick={onClick}>
      example works title
    </div>
  );
};

interface SidebarContentProps {
  onClick: () => {};
}
export default SidebarContent;
