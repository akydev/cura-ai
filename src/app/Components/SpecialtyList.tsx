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
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { useFetch } from "../customhook/useFetch";
import { ISpecialty } from "../type/IDoctor";

function SpecialtyList() {
  const { loading, data, error } = useFetch<ISpecialty>("/speciality");

  console.log(data);
  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "#f4f7fc" }}>
        <Typography variant="h4" gutterBottom align="center">
          Seach with Specialty
        </Typography>
      </Box>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {loading ? (
          <Box><Skeleton variant="rectangular" width={210} height={118} /></Box>
        ) : (
          data?.specialities.map((value) => (
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

                  {/* Doctor's Specialty */}
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{ marginBottom: "1rem" }}
                  >
                    {value.title}
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
                        View
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>
    </Container>
  );
}

export default SpecialtyList;
