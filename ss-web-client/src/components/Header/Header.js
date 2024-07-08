import React, { useContext, useState } from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

import { AuthContext } from "../../context/AuthContext/AuthContext";
import { CustomThemeContext } from "../../context/CustomThemeContext/CustomThemeContext";

const drawerWidth = 240;

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  paddingRight: 24, // keep right padding when drawer closed
}));

const MenuButton = styled(IconButton)(({ theme, open }) => ({
  marginRight: 36,
  ...(open && {
    display: "none",
  }),
}));

const Title = styled(Typography)({
  flexGrow: 1,
});

export default function AppHeader(props) {
  const { activeTheme, toggleTheme } = useContext(CustomThemeContext);
  const { signOut, role } = useContext(AuthContext);

  const [anchorElSettingsMenu, setAnchorElSettingsMenu] = useState(null);

  const handleClickSettingsMenu = (event) => {
    setAnchorElSettingsMenu(event.currentTarget);
  };

  const handleClickLogoutMenuItem = () => {
    signOut();
    setAnchorElSettingsMenu(null);
  };

  return (
    <CustomAppBar position="absolute" open={props.open}>
      <CustomToolbar>
        <MenuButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          open={props.open}
        >
          <MenuIcon />
        </MenuButton>

        <Title component="h1" variant="h6" color="inherit" noWrap>
          Hi! Administrator
        </Title>

        <IconButton onClick={toggleTheme} color="inherit">
          {activeTheme === 1 ? (
            <NightsStayOutlinedIcon />
          ) : (
            <Brightness4OutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={handleClickSettingsMenu} color="inherit">
          <AccountCircleOutlinedIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorElSettingsMenu}
          keepMounted
          open={Boolean(anchorElSettingsMenu)}
          onClose={() => setAnchorElSettingsMenu(null)}
        >
          <MenuItem onClick={handleClickLogoutMenuItem}>Logout</MenuItem>
        </Menu>
      </CustomToolbar>
    </CustomAppBar>
  );
}
