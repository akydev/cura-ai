import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { AccessTime, LocationOn } from "@mui/icons-material";
import { IUser } from "@/app/type/IUser";
import { IDoctor, ISpecialty } from "@/app/type/IDoctor";
import { ISlots } from "@/app/type/ISlot";

interface IProps {
  user: IUser | null;
  doctors: IDoctor | undefined;
  specialty: ISpecialty | undefined;
  slots: ISlots | undefined;
}

function Appointment({ user, doctors, specialty, slots }: IProps) {
  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "primary" }}>
        <Typography variant="h4" gutterBottom align="center">
          Your Appointment Details
        </Typography>
      </Box>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid2 size={4}>
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
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  margin: "0 auto",
                  marginBottom: "1rem",
                }}
              />

              {/* Appointment Title */}
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", textAlign: "center" }}
              >
                {/* Your Appointment with Dr. {value.doctorId.firstName}{" "}
                      {value.doctorId.lastName} */}
                Dr. {doctors?.firstName} {doctors?.lastName}
              </Typography>
              {/* Specialization / Description */}
              <Typography
                variant="body2"
                sx={{ textAlign: "center", marginBottom: "1.5rem" }}
              >
                {specialty?.title}
              </Typography>

              {/* Appointment Date */}
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", marginBottom: "0.5rem" }}
              >
                <AccessTime
                  sx={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                date : {slots?.date.split("T")[0]} | time : {slots?.time}
              </Typography>

              {/* Appointment Location */}
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center", marginBottom: "1rem" }}
              >
                <LocationOn
                  sx={{ verticalAlign: "middle", marginRight: "8px" }}
                />
                location : {doctors?.fullAddress.city} |{" "}
                {doctors?.fullAddress.state} | {doctors?.fullAddress.country}
              </Typography>

              {/* Action Buttons */}
              <Grid2 container spacing={2} columns={12}>
                <Grid2 size={6}>
                  <Button
                    type="submit"
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
                    // onClick={() => {
                    //   // handleCancelAppointment();
                    //   console.log("Cancel Appointment");
                    // }}
                  >
                    Cancel
                  </Button>
                </Grid2>
              </Grid2>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Appointment;
