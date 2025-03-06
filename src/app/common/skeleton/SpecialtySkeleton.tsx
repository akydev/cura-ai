import { Card, CardContent, Grid, Skeleton } from "@mui/material";
import React from "react";

function SpecialtySkeleton() {
  return (
    <Card
      sx={{
        Width: 345,
        margin: "1rem auto",
        borderRadius: "16px",
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <CardContent sx={{ padding: "2rem", textAlign: "center" }}>
        {/* Avatar Skeleton */}
        <Skeleton
          variant="circular"
          width={100}
          height={100}
          sx={{
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        />

        {/* Doctor's Specialty Skeleton */}
        <Skeleton
          variant="text"
          width="70%"
          sx={{
            marginBottom: "1rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        {/* Book Appointment Button Skeleton */}
        <Grid container justifyContent="center" sx={{ marginTop: "1rem" }}>
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={100}
              height={40}
              sx={{ borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SpecialtySkeleton;
