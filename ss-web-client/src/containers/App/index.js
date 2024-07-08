import React, { useContext } from "react";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

import { AppHeader, AppSidebar } from "../../components";

const Root = styled("div")({
  display: "flex",
  width: "100%",
});

export default function Main({ children }) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Root>
      <CssBaseline />
      <AppHeader handleDrawerOpen={handleDrawerOpen} open={open} />
      <AppSidebar handleDrawerClose={handleDrawerClose} open={open} />
      {children}
    </Root>
  );
}
