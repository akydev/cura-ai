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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { IDoctorList } from "../../type/IDoctor";
import DoctorLIstSkeleton from "../../common/skeleton/DoctorLIstSkeleton";

interface IProps {
  loading: boolean;
  data: IDoctorList | undefined;
  setDoctorId: (id: string) => void;
  setStep: (step: number) => void; // Accept a number as an argument
}

function DoctorList({ loading, data, setDoctorId, setStep }: IProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<{
    [key: string]: string | null;
  }>({});
  console.log(selectedSpecialty);

  // Handle specialty selection for each doctor
  const handleSpecialtyChange = (doctorId: string, specialtyId: string) => {
    setSelectedSpecialty((prevState) => ({
      ...prevState,
      [doctorId]: specialtyId,
    }));
  };

  // Handle booking appointment
  const handleBookAppointment = (
    doctorId: string,
    selectedSpecialtyId: string | null
  ) => {
    if (selectedSpecialtyId) {
      setDoctorId(doctorId);
      setStep(2);
      // alert(
      //   `Booking appointment for doctor ID: ${doctorId} with specialty ID: ${selectedSpecialtyId}`
      // );
    } else {
      // alert(`Please select a specialty before booking.`);
    }
  };

  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "primary" }}>
        <Typography variant="h4" gutterBottom align="center">
          Available Doctor
        </Typography>
      </Box>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => <DoctorLIstSkeleton key={index} />)
          : data?.doctors.map((value) => (
              <Grid2 size={4} key={value._id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    margin: "1rem auto",
                    borderRadius: "16px",
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "primary",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 12px 25px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <CardContent sx={{ padding: "2rem", textAlign: "center" }}>
                    {/* Avatar Image */}
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

                    {/* Doctor's Name */}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                    >
                      {value.firstName} {value.lastName}
                    </Typography>

                    {/* Doctor's Specialization */}
                    {value.specializationId.length > 1 ? (
                      <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                        <InputLabel>Select Specialty</InputLabel>
                        <Select
                          value={selectedSpecialty[value._id] || ""}
                          label="Select Specialty"
                          onChange={(e) =>
                            handleSpecialtyChange(value._id, e.target.value)
                          }
                        >
                          {value.specializationId.map((specialization) => (
                            <MenuItem
                              key={specialization._id}
                              value={specialization._id}
                            >
                              {specialization.title}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    ) : (
                      <Grid container justifyContent="center" spacing={1}>
                        {value.specializationId.map((specialization) => (
                          <Grid item key={specialization._id}>
                            <Chip
                              label={specialization.title}
                              color="primary"
                            />
                          </Grid>
                        ))}
                      </Grid>
                    )}

                    {/* Doctor's Rating */}
                    <Rating
                      value={5}
                      readOnly
                      precision={0.5}
                      sx={{ marginY: "1rem" }}
                    />

                    {/* Tags (Experience and Languages Spoken) */}
                    <Grid container justifyContent="center" spacing={1}>
                      <Grid item>
                        <Chip
                          label={`${value.experience} years`}
                          color="primary"
                        />
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
                          href={`tel:${value.phone}`}
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
                          href={`mailto:${value.email}`}
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
                          disabled={
                            !selectedSpecialty[value._id] &&
                            value.specializationId.length > 1
                          }
                          onClick={() =>
                            handleBookAppointment(
                              value._id,
                              value.specializationId.length === 1
                                ? value.specializationId[0]._id // Automatically select the only specialty if there is just one
                                : selectedSpecialty[value._id] // Otherwise, use the selected specialty
                            )
                          }
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
