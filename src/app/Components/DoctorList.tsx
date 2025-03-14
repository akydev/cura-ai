import { Email, LocationOn, Phone } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Grid2,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useFetch } from "../customhook/useFetch";
import { IDoctor, IDoctorList } from "../type/IDoctor";

function DoctorList() {
  const { loading, data, error } = useFetch<IDoctorList>("/doctors");

  console.log(data);
  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "#f4f7fc" }}>
        <Typography variant="h4" gutterBottom align="center">
          Doctor List
        </Typography>
      </Box>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data?.doctors.map((value) => (
          <Grid2 size={4} key={value._id}>
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
                  // src={value.profilePicture || ""}
                  src=""
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
                  {value.firstName} {value.lastName}
                </Typography>

                {/* Doctor's Specialty */}
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  sx={{ marginBottom: "1rem" }}
                >
                  {value.specializationId.title}
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
                    <Chip
                      label={`Languages: English and French`}
                      color="secondary"
                    />
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
                      href={`tel:${value.phone}`} // Dynamically pass phone number
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
                      href={`mailto:${value.email}`} // Dynamically pass email
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
                  <LocationOn
                    sx={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  {value.fullAddress.city}
                </Typography>

                {/* Book Appointment Button */}
                <Grid
                  container
                  justifyContent="center"
                  sx={{ marginTop: "1rem" }}
                >
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
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default DoctorList;
