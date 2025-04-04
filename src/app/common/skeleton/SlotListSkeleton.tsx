import React from "react";
import { Card, CardContent, Grid, Skeleton } from "@mui/material";

function SlotListSkeleton() {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "1.5rem auto",
        borderRadius: "16px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ color: "#fff", padding: "2rem" }}>
        {/* Slot Number Title */}
        <Skeleton
          variant="text"
          width="60%"
          height={30}
          sx={{ marginBottom: "1rem", marginLeft: "auto", marginRight: "auto" }}
        />

        {/* Appointment Date */}
        <Skeleton
          variant="text"
          width="80%"
          height={20}
          sx={{
            marginBottom: "0.5rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        {/* Appointment Fees */}
        <Skeleton
          variant="text"
          width="80%"
          height={20}
          sx={{ marginBottom: "1rem", marginLeft: "auto", marginRight: "auto" }}
        />

        {/* Action Buttons */}
        <Grid container spacing={2} columns={12}>
          <Grid item xs={6}>
            <Skeleton
              variant="rectangular"
              height={36}
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Skeleton
              variant="rectangular"
              height={36}
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default SlotListSkeleton;
