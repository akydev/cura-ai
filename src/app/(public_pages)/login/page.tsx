"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import authFetch from "../../axiosBase/custom";
import { ILogin } from "@/app/type/ILogin";
import { useToast } from "@/app/context/ToastProvider";

const initialValues: ILogin = {
  email: "",
  password: "",
};

function Page() {
  const toast = useToast();
  // Use state to store form data (email and password)
  const [formData, setFormData] = useState<ILogin>(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await authFetch.post("/accounts/login", formData);
      // successful response of data
      if (res.data) {
        const { token, userId, role, msg } = res.data;
        setLoading(false);
        toast.success(msg);
        setFormData(initialValues);
        // Store the token and userId in localStorage or sessionStorage
        localStorage.setItem("token", token); // Store token
        localStorage.setItem("userId", userId); // Store user ID
        localStorage.setItem("role", role); // Store role
      }
    } catch (error: any) {
      if (error) {
        setLoading(false);
        toast.error(error.response.data.msg);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              src="/logo/cura-ai.png"
              alt="Logo"
              style={{
                width: "50%",
                maxWidth: "200px",
                height: "auto",
                borderRadius: "10px",
              }}
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

              {error && (
                <Typography color="error" variant="body2" align="center">
                  {error}
                </Typography>
              )}

              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{ mt: 3 }}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Log in"}
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

export default Page;
