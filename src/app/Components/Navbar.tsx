"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Switch,
  Container,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo/cura-ai.png"; // Ensure logo is in the public folder
import { useThemeContext } from "../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SxProps, Theme } from "@mui/material/styles";
import { useToast } from "../context/ToastProvider";

const commonButtonStyles = (mode: "light" | "dark"): SxProps<Theme> => ({
  transition: "color 0.3s ease, border-bottom 0.3s ease",
  position: "relative",
  padding: "8px 16px",
  "&:hover": {
    color: mode === "light" ? "#FFEB3B" : "#90CAF9",
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

const Navbar: React.FC = () => {
  const toast = useToast();
  const { toggleTheme, mode } = useThemeContext();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null; // Check token or cookies or session storage.
  const logout = () => {
    localStorage.clear();
    toast.success("Logout successfully");
    setTimeout(() => (window.location.href = "/login"), 1000);
  };

  return (
    <AppBar
      position="static"
      color="primary" // Change AppBar color based on theme
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
          }}
        >
          {/* Left Side: Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="Website Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <Typography
              variant="h6"
              color="primary"
              sx={{ padding: "8px 16px", lineHeight: 1 }}
            >
              Cura Ai
            </Typography>
          </Box>

          {/* Right Side: Navigation Links and Theme Toggle */}
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {/* Navigation Links */}
            {token ? (
              <>
                <Link href="/home">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Home
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Profile
                  </Button>
                </Link>
                <Link href="/bookappointment">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Book Appointment
                  </Button>
                </Link>
                <Button
                  color="primary"
                  sx={commonButtonStyles(mode)}
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/about">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    About
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Contact
                  </Button>
                </Link>
                <Link href="/service">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Service
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Sign up
                  </Button>
                </Link>
                <Link href="/login">
                  <Button color="primary" sx={commonButtonStyles(mode)}>
                    Login
                  </Button>
                </Link>
              </>
            )}
            {/* Theme Toggle */}
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <Switch checked={mode === "dark"} onChange={toggleTheme} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
