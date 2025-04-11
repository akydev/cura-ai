import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Grid2,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";

function DoctorLIstSkeleton() {
  return (
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

        {/* Doctor's Name Skeleton */}
        <Skeleton
          variant="text"
          width="60%"
          sx={{
            margin: "0 auto",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        />

        {/* Doctor's Specialty Skeleton */}
        <Skeleton
          variant="text"
          width="80%"
          sx={{
            margin: "0 auto",
            marginBottom: "1rem",
            color: "textSecondary",
          }}
        />

        {/* Rating Skeleton */}
        <Skeleton
          variant="rectangular"
          width="50%"
          height={25}
          sx={{
            margin: "0 auto",
            marginBottom: "1rem",
          }}
        />

        {/* Tags Skeleton */}
        <Grid container justifyContent="center" spacing={1}>
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={100}
              height={30}
              sx={{ borderRadius: "16px" }}
            />
          </Grid>
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={150}
              height={30}
              sx={{ borderRadius: "16px" }}
            />
          </Grid>
        </Grid>

        {/* Contact Buttons Skeleton */}
        <Grid
          container
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: "1rem" }}
        >
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={120}
              height={40}
              sx={{ borderRadius: "20px" }}
            />
          </Grid>
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={120}
              height={40}
              sx={{ borderRadius: "20px" }}
            />
          </Grid>
        </Grid>

        {/* Location Skeleton */}
        <Skeleton
          variant="text"
          width="70%"
          sx={{
            margin: "0 auto",
            marginTop: "1rem",
            color: "textSecondary",
          }}
        />

        {/* Book Appointment Button Skeleton */}
        <Grid container justifyContent="center" sx={{ marginTop: "1rem" }}>
          <Grid item>
            <Skeleton
              variant="rectangular"
              width={180}
              height={40}
              sx={{ borderRadius: "20px" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DoctorLIstSkeleton;
