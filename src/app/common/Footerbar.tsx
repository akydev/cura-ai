// components/FooterBar.tsx
import React from "react";
import {
  AppBar,
  Typography,
  Box,
  Link,
  IconButton,
  Container,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterBar = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            height: "56px",
            display: "flex",
            justifyContent: "space-between",
            padding: "16px 12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "8px",
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
              © {new Date().getFullYear()} Cura AI
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
      </Container>
    </AppBar>
  );
};

export default FooterBar;
