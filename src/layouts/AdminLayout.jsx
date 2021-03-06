import React, { useState } from "react";
import Appbar from "../components/Header/Appbar";
import DesktopDrawer from "../components/Sidebar/DesktopDrawer";
import MobileDrawer from "../components/Sidebar/MobileDrawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
const drawerWidth = 260;

function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Appbar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Mobile Drawer */}
        <MobileDrawer
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        {/* Side Drawer */}
        <DesktopDrawer drawerWidth={drawerWidth} />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className=" bg-flashwhite  min-h-full"
      >
        <Toolbar />
        <div>{children}</div>
      </Box>
    </Box>
  );
}

export default AdminLayout;
