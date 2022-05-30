import * as React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import SidebarContent from "./SidebarContent.tsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const useStyles = makeStyles(() => ({
  main: {
    height: "100vh",
    width: "300px",
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "hidden",
    //border: "1px solid red",
  },
}));

const SidebarContainer: React.FC<SidebarContainerProps> = (props) => {
  const { isShowing, toggleShowing } = props;
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div
      className={classes.main}
      style={{ display: isShowing ? "block" : "none" }}
    >
      <ArrowBackIosNewIcon
        onClick={toggleShowing}
        style={{
          marginLeft: "225px",
          marginTop: "30px",
          fontSize: useMediaQuery(theme.breakpoints.up("sm")) ? 50 : 30,
        }}
      />

      <SidebarContent onClick={toggleShowing} />
      <SidebarContent onClick={toggleShowing} />
    </div>
  );
};

interface SidebarContainerProps {
  isShowing: boolean;
  toggleShowing: () => {};
}
export default SidebarContainer;
