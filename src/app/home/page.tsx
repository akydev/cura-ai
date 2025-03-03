"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import FooterBar from "../Components/Footerbar";

// Define styles and components for the homepage
const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{ backgroundColor: "#000000", color: "#fff", padding: "50px 0" }}
      >
        <Container>
          <Typography
            variant="h3"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            Welcome to Your Healthcare Dashboard
          </Typography>
          <Typography
            variant="h6"
            sx={{ marginTop: "20px", textAlign: "center" }}
          >
            Easily manage appointments, view test results, and get personalized
            healthcare recommendations.
          </Typography>
        </Container>
      </Box>

      {/* Patient Dashboard Section */}
      <Container sx={{ marginTop: "40px" }}>
        <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: "20px" }}>
          Your Dashboard
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  backgroundColor: "#00796b",
                }}
              >
                JD
              </Avatar>
              <CardContent>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="textSecondary">
                  Member since: 2023
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                Upcoming Appointments
              </Typography>
              <Typography variant="body1" color="textSecondary">
                No upcoming appointments
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                Test Results
              </Typography>
              <Typography variant="body1" color="textSecondary">
                No new test results
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Services Section */}
      <Box
        sx={{
          marginTop: "40px",
          backgroundColor: "#e0f2f1",
          padding: "40px 0",
        }}
      >
        <Container>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, marginBottom: "20px", textAlign: "center" }}
          >
            Our Medical Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/150"
                  alt="Service 1"
                />
                <CardContent>
                  <Typography variant="h6">General Consultation</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Comprehensive health checkups and treatments.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/150"
                  alt="Service 2"
                />
                <CardContent>
                  <Typography variant="h6">Specialist Care</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Consult with specialists for specific needs.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://via.placeholder.com/150"
                  alt="Service 3"
                />
                <CardContent>
                  <Typography variant="h6">Emergency Services</Typography>
                  <Typography variant="body2" color="textSecondary">
                    24/7 urgent care for emergencies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <FooterBar />
    </Box>
  );
};

export default HomePage;
