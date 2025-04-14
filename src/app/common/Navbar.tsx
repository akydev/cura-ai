"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Container,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import { useToast } from "../context/ToastProvider";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import ThemeSwitcher from "./theme/ThemeSwitcher";
import Image from "next/image";
import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder

import { SxProps, Theme } from "@mui/material/styles";
import { SVGLogoIcons } from "../assets/SVGIcons";

// Common button styles
const commonButtonStyles = (mode: "light" | "dark"): SxProps<Theme> => ({
  transition: "color 0.3s ease, border-bottom 0.3s ease",
  position: "relative",
  padding: "8px 16px",
  color: mode === "light" ? "#FFFFFF" : "#FFD700", // Explicit color based on theme
  "&:hover": {
    color: mode === "light" ? "#FFEB3B" : "#90CAF9", // Change hover color based on mode
  },
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "2px",
    backgroundColor: mode === "light" ? "#FFEB3B" : "#90CAF9",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform 0.3s ease",
  },
  "&:hover:after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

interface NavbarLinkProps {
  href: string;
  text: string;
  onClick?: () => void;
  mode: "light" | "dark";
}

const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  text,
  onClick,
  mode,
}) => (
  <Link href={href}>
    <Button color="primary" sx={commonButtonStyles(mode)} onClick={onClick}>
      {text}
    </Button>
  </Link>
);

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const toast = useToast();
  const { mode } = useThemeContext();

  // Ensure the localstore is accessed only on the client side after the component has mounted
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    }
  }, []);

  // logout logic
  const logout = () => {
    localStorage.clear();
    toast.success("Logout successfully");
    setTimeout(() => (window.location.href = "/login"), 1000);
  };

  const handleDrawerToggle = () => setOpenDrawer(!openDrawer);

  const renderLinks = () => {
    const commonLinks = token ? (
      <>
        <NavbarLink href="/home" text="Home" mode={mode} />
        <NavbarLink href="/profile" text="Profile" mode={mode} />
        <NavbarLink
          href="/bookappointment"
          text="Book Appointment"
          mode={mode}
        />
        <NavbarLink
          href="/viewappointment"
          text="View Appointment"
          mode={mode}
        />
        {role === "doctor" && (
          <NavbarLink href="/patientlist" text="Patient List" mode={mode} />
        )}
        <Button color="primary" sx={commonButtonStyles(mode)} onClick={logout}>
          Logout
        </Button>
      </>
    ) : (
      <>
        <NavbarLink href="/about" text="About" mode={mode} />
        <NavbarLink href="/contact" text="Contact" mode={mode} />
        <NavbarLink href="/service" text="Service" mode={mode} />
        <NavbarLink href="/signup" text="Sign up" mode={mode} />
        <NavbarLink href="/login" text="Login" mode={mode} />
      </>
    );
    return commonLinks;
  };

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        sx={{
          backdropFilter: "blur(10px)", // Apply blur effect
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", // Custom shadow
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: isMobile ? "8px" : "16px",
            }}
          >
            {/* Left Side: Logo and Title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Brand Icon */}
              <Link href="/" passHref>
                <SVGLogoIcons />
              </Link>
              {/* Brand Name */}
              <Typography
                variant="h6"
                color="white"
                sx={{ padding: "8px 16px", lineHeight: 1 }}
              >
                Cura Ai
              </Typography>
            </Box>

            {/* Right Side: Navigation Links and Theme Toggle */}
            {isMobile ? (
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <IconButton onClick={handleDrawerToggle} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {renderLinks()}
              </Box>
            )}
            {/* Theme Switcher */}
            {!isMobile && <ThemeSwitcher />}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: "250px" } }}
      >
        <Box sx={{ padding: "16px", display: "flex", flexDirection: "column" }}>
          {renderLinks()}
          <ThemeSwitcher />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
