"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function page() {
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={2} columns={12}>
        {/* Left Section (Logo and Welcome Message) */}
        <Grid2 size={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="/images/hero-background.png"
              alt="Logo"
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <Typography variant="h4" sx={{ mt: 3 }}>
              Welcome to Our Platform
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Join us and experience something amazing!
            </Typography>
          </Box>
        </Grid2>

        {/* Right Section (Login Card) */}
        <Grid2 size={6}>
          <Card sx={{ padding: 3 }}>
            <CardContent>
              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                Login to Your Account
              </Typography>
              <form>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  error
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  type="password"
                  error
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{ mt: 3 }}
                >
                  Log in
                </Button>
              </form>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#1976d2",
                    }}
                  >
                    Sign up here
                  </a>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
