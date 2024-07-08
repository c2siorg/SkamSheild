import React, { useContext } from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PieChartIcon from "@mui/icons-material/PieChart";
import COMPANY_LOGO from "../../assests/companyLogo2.png";
import { Avatar, ListItemAvatar } from "@mui/material";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";

const drawerWidth = 240;

const ToolbarIcon = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "0 8px",
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function AppSidebar(props) {
  const history = useNavigate();
  const { role } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Drawer variant="permanent" open={props.open}>
        <ToolbarIcon>
          {/* <Avatar alt={"#"} src={COMPANY_LOGO} /> */}

          <div style={{ flexGrow: 1 }} />
          <IconButton onClick={props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </ToolbarIcon>
        <Divider />
        <List>
          <ListItemButton onClick={() => history("/main/reviews")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton onClick={() => history("/main/management")}>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary="Manage" />
          </ListItemButton>

          <ListItemButton onClick={() => history("/main/reports")}>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
