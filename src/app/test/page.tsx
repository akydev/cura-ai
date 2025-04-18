import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { AccessTime, LocationOn, DateRange } from "@mui/icons-material";

const BookAppointmentCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 450,
        margin: "2rem auto",
        borderRadius: "20px",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
        background: "#ffffff",
        padding: "1.5rem",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent>
        {/* Title */}
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ fontWeight: "bold", color: "#333" }}
        >
          Book Your Appointment
        </Typography>

        {/* Subheading */}
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ color: "#666", marginBottom: "1rem" }}
        >
          Schedule your consultation with ease.
        </Typography>

        {/* Avatar Image (doctor or service provider image) */}
        <Avatar
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            marginBottom: "1rem",
            backgroundColor: "#5360ea",
          }}
          src="https://randomuser.me/api/portraits/men/10.jpg"
        />

        {/* Appointment Date */}
        <TextField
          label="Select Date"
          type="date"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Appointment Time */}
        <TextField
          label="Select Time"
          type="time"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1rem" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* Location Selection */}
        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
          <InputLabel>Location</InputLabel>
          <Select defaultValue="" label="Location">
            <MenuItem value="clinic">Clinic - 123 Health St</MenuItem>
            <MenuItem value="home">Home Visit</MenuItem>
            <MenuItem value="virtual">Virtual Consultation</MenuItem>
          </Select>
        </FormControl>

        {/* Appointment Notes */}
        <TextField
          label="Additional Notes"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "1.5rem" }}
        />

        {/* Book Appointment Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: "8px",
            padding: "1rem",
            fontWeight: "bold",
          }}
        >
          Confirm Appointment
        </Button>

        {/* Divider */}
        <Grid container spacing={2} sx={{ marginTop: "1.5rem" }}>
          <Grid item xs={6} display="flex" alignItems="center">
            <AccessTime sx={{ color: "#5360ea", marginRight: "8px" }} />
            <Typography variant="body2">Flexible Hours</Typography>
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center">
            <LocationOn sx={{ color: "#5360ea", marginRight: "8px" }} />
            <Typography variant="body2">Multiple Locations</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const AppointmentPage = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <BookAppointmentCard />
    </div>
  );
};

export default AppointmentPage;
