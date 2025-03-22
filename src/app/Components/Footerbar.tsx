// components/FooterBar.tsx
import React from "react";
import { AppBar, Typography, Box, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterBar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ bottom: 0 }}>
      <Box
        sx={{
          height: "56px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0px 12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            color: "white",
          }}
        >
          <Link href="/privacy-policy" color="inherit">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="inherit">
            Terms of Service
          </Link>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} E-Medical Hub Website
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton href="https://facebook.com" color="inherit">
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" color="inherit">
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" color="inherit">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default FooterBar;
