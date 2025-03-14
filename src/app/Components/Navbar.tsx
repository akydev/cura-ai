import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          // backgroundColor: "rgba(0, 0, 0, 0)", // Semi-transparent background for contrast
          backgroundColor: "#000000",
          backdropFilter: "blur(10px)", // Apply blur effect
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Left Side: Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/public/logo/cura-ai.png" // Ensure the logo is placed in the 'public' folder
              alt="Website Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography variant="h6" color="inherit">
              E Medical Hub
            </Typography>
          </Box>

          {/* Right Side: Navigation Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Service</Button>
            <Link href="/profile">
              <Button color="inherit">DocProfile</Button>
            </Link>
            <Button color="inherit">PaitProfile</Button>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">Log in</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
