import { Email, LocationOn, Phone } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

function DoctorList() {
  return (
    <>
      <div style={{ padding: "2rem", backgroundColor: "#f4f7fc" }}>
        <Typography variant="h4" gutterBottom align="center">
          Doctor List
        </Typography>
      </div>
      <Card
        sx={{
          maxWidth: 345,
          margin: "1rem auto",
          borderRadius: "16px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <CardContent sx={{ padding: "2rem", textAlign: "center" }}>
          {/* Avatar for Doctor's Profile Picture */}
          <Avatar
            src={""}
            alt={"Profile Photo"}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              marginBottom: "1rem",
              border: "3px solid #5360ea",
            }}
          />

          {/* Doctor's Name */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            Doctor Name
          </Typography>

          {/* Doctor's Specialty */}
          <Typography
            variant="subtitle1"
            color="textSecondary"
            sx={{ marginBottom: "1rem" }}
          >
            doctor.specialty
          </Typography>

          {/* Doctor's Rating */}
          <Rating
            value={5}
            readOnly
            precision={0.5}
            sx={{ marginBottom: "1rem" }}
          />

          {/* Tags (Experience and Languages Spoken) */}
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <Chip label={`Experience: 5 years`} color="primary" />
            </Grid>
            <Grid item>
              <Chip label={`Languages: English and French`} color="secondary" />
            </Grid>
          </Grid>

          {/* Contact Information */}
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "1rem" }}
          >
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<Phone />}
                sx={{ borderRadius: "20px" }}
              >
                Call
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<Email />}
                sx={{ borderRadius: "20px" }}
              >
                Email
              </Button>
            </Grid>
          </Grid>

          {/* Location */}
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginTop: "1rem" }}
          >
            <LocationOn sx={{ verticalAlign: "middle", marginRight: "8px" }} />
            doctor location
          </Typography>
          {/* Book Appointment Button */}
          <Grid container justifyContent="center" sx={{ marginTop: "1rem" }}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "20px" }}
              >
                Book Appointment
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default DoctorList;
