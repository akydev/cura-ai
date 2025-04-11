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

function ViewAppointmentSkeleton() {
  return (
    <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid2 size={4}>
        <Card
          sx={{
            maxWidth: 400,
            margin: "1.5rem auto",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ color: "#fff", padding: "2rem" }}>
            {/* Avatar Skeleton */}
            <Skeleton
              variant="circular"
              width={80}
              height={80}
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            />

            {/* Appointment Title Skeleton */}
            <Skeleton
              variant="text"
              width="50%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            />

            {/* Specialization / Description Skeleton */}
            <Skeleton
              variant="text"
              width="70%"
              sx={{
                margin: "0 auto",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Date Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Location Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            />

            {/* Action Buttons Skeleton */}
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={4}>
        <Card
          sx={{
            maxWidth: 400,
            margin: "1.5rem auto",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ color: "#fff", padding: "2rem" }}>
            {/* Avatar Skeleton */}
            <Skeleton
              variant="circular"
              width={80}
              height={80}
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            />

            {/* Appointment Title Skeleton */}
            <Skeleton
              variant="text"
              width="50%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            />

            {/* Specialization / Description Skeleton */}
            <Skeleton
              variant="text"
              width="70%"
              sx={{
                margin: "0 auto",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Date Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Location Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            />

            {/* Action Buttons Skeleton */}
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={4}>
        <Card
          sx={{
            maxWidth: 400,
            margin: "1.5rem auto",
            borderRadius: "16px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <CardContent sx={{ color: "#fff", padding: "2rem" }}>
            {/* Avatar Skeleton */}
            <Skeleton
              variant="circular"
              width={80}
              height={80}
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            />

            {/* Appointment Title Skeleton */}
            <Skeleton
              variant="text"
              width="50%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            />

            {/* Specialization / Description Skeleton */}
            <Skeleton
              variant="text"
              width="70%"
              sx={{
                margin: "0 auto",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Date Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            />

            {/* Appointment Location Skeleton */}
            <Skeleton
              variant="text"
              width="60%"
              sx={{
                margin: "0 auto",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            />

            {/* Action Buttons Skeleton */}
            <Grid container spacing={2} columns={12}>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={40}
                  sx={{ borderRadius: "8px" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default ViewAppointmentSkeleton;
