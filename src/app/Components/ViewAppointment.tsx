import React from "react";
import { AccessTime, LocationOn } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";

function ViewAppointment() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f4f7fc" }}>
      <Typography variant="h4" gutterBottom align="center">
        Your Appointment Details
      </Typography>

      <Card
        sx={{
          maxWidth: 400,
          margin: "1.5rem auto",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          // background: "linear-gradient(145deg, #6e7dff, #5360ea)",
          background: "#000000",
          overflow: "hidden",
        }}
      >
        <CardContent sx={{ color: "#fff", padding: "2rem" }}>
          {/* Avatar for the doctor */}
          {/* <Avatar sx={{ width: 80, height: 80, margin: '0 auto', marginBottom: '1rem' }} /> */}

          {/* Appointment Title */}
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Appointment with Doctor name
          </Typography>

          {/* Appointment Date */}
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", marginBottom: "0.5rem" }}
          >
            <AccessTime sx={{ verticalAlign: "middle", marginRight: "8px" }} />
            appointment date | appointment time
          </Typography>

          {/* Appointment Location */}
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "center", marginBottom: "1rem" }}
          >
            <LocationOn sx={{ verticalAlign: "middle", marginRight: "8px" }} />
            appointment.location
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{ textAlign: "center", marginBottom: "1.5rem" }}
          >
            appointment description
          </Typography>

          {/* Action Buttons */}
          <Grid2 container spacing={2} columns={12}>
            <Grid2 size={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: "8px" }}
              >
                Confirm
              </Button>
            </Grid2>
            <Grid2 size={6}>
              <Button
                variant="outlined"
                color="error"
                fullWidth
                sx={{ borderRadius: "8px" }}
              >
                Cancel
              </Button>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </div>
  );
}

export default ViewAppointment;
