import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import * as React from "react";
import Box from "@mui/material/Box";
import { DrawerHeader } from "./Sidebar";

export const Layout = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        //   open={open}
        //   handleDrawerOpen={handleDrawerOpen}
        //   handleDrawerClose={handleDrawerClose}
        {...{ open, handleDrawerClose, handleDrawerOpen }}
      />
      <Sidebar open={open} />
      <Box>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
