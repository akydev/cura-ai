"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Switch,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// Import the image as a module
import logo from "/public/logo/cura-ai.png";
import { useThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme, currentTheme } = useThemeContext();
  return (
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
          <Link href="/">
            <Image
              src={logo} // Ensure the logo is placed in the 'public' folder
              alt="Website Logo"
              width={40}
              height={40}
              priority
              style={{ marginRight: "10px" }}
            />
          </Link>
          <Typography variant="h6" color="inherit">
            Cura Ai
          </Typography>
        </Box>

        {/* Left Side: Theme Toggle */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Theme toggle button */}
          <IconButton color="inherit" onClick={toggleTheme}>
            <Typography variant="button" sx={{ color: "inherit" }}>
              Switch to {currentTheme === "light" ? "Dark" : "Light"} Mode
            </Typography>
          </IconButton>

          {/* Or use a Switch component for a more interactive UI */}
          <Switch
            checked={currentTheme === "dark"}
            onChange={toggleTheme}
            name="themeSwitch"
            color="default"
          />
        </Box>

        {/* Right Side: Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link href="/about">
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/contact">
            <Button color="inherit">Contact</Button>
          </Link>
          <Link href="/service">
            <Button color="inherit">Service</Button>
          </Link>
          <Link href="/signup">
            <Button color="inherit">Sign up</Button>
          </Link>
          <Link href="/login">
            <Button color="inherit">Log in</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
