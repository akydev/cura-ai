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
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import authFetch from "../../axiosBase/custom";
import { ILogin } from "@/app/type/ILogin";
import { useToast } from "@/app/context/ToastProvider";
import Link from "next/link";
import {
  uppercaseRegex,
  lowercaseRegex,
  specialCharRegex,
  numberRegex,
  noWhitespaceRegex,
  lengthRegex,
  emailRegex,
} from "@/app/regularExpressions/regex";
import { SVGBrandImage } from "@/app/assets/SVGIcons";
import Image from "next/image";
const initialValues: ILogin = {
  email: "",
  password: "",
};

function validatePassword(value: string): string | null {
  if (!value) return "Password is required";
  if (!uppercaseRegex.test(value))
    return "Password must contain at least one uppercase letter";
  if (!lowercaseRegex.test(value))
    return "Password must contain at least one lowercase letter";
  if (!specialCharRegex.test(value))
    return "Password must contain at least one special character";
  if (!numberRegex.test(value))
    return "Password must contain at least one number";
  if (!noWhitespaceRegex.test(value))
    return "Password must not contain any whitespace";
  if (!lengthRegex.test(value))
    return "Password must be at least 8 characters long";

  return null;
}

function Page() {
  const toast = useToast();
  // Use state to store form data (email and password)
  const [formData, setFormData] = useState<ILogin>(initialValues);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<ILogin>("");
  const [error, setError] = useState<{ email?: string; password?: string }>({});

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data (Check if email and password are not empty and validate email format)
    if (!formData.email || !formData.password) {
      setError((prevState) => ({
        ...prevState,
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      }));
      return;
    }

    // Validate email format using regex
    if (!emailRegex.test(formData.email)) {
      setError((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
      return;
    }

    // Validate password format
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setError((prevState) => ({
        ...prevState,
        password: passwordError,
      }));
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
        setTimeout(() => (window.location.href = "/profile"), 1000); // Redirect to profile page
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

  // Handle input change and validate the input in real-time
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const validateField = (fieldName: string, fieldValue: string) => {
      if (fieldName === "email") {
        setError((prevState) => ({
          ...prevState,
          email: emailRegex.test(fieldValue)
            ? ""
            : "Please enter a valid email address",
        }));
      } else if (fieldName === "password") {
        setError((prevState) => ({
          ...prevState,
          password: validatePassword(fieldValue) || "",
        }));
      }
    };

    // Call validateField for real-time validation
    validateField(name, value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex", // Flexbox layout
        alignItems: "center", // Vertically center the content
        justifyContent: "center", // Horizontally center the content
        padding: 9, // Optional: Adds some padding around the content
      }}
    >
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
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
            {/* Brand Logo */}
            <SVGBrandImage />
            {/* Welcome Message */}
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
                  error={!!error.email}
                  helperText={error.email}
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
                  error={!!error.password}
                  helperText={error.password}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{ mt: 3, position: "relative" }}
                  disabled={loading}
                  loadingPosition="end"
                >
                  {loading ? (
                    <>
                      <CircularProgress
                        size={24}
                        color="primary"
                        sx={{ position: "absolute" }}
                      />
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </form>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Link
                    color="primary"
                    href="/signup"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Sign up here
                  </Link>
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
