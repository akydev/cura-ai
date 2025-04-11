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
  Rating,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { IDoctorList } from "../../type/IDoctor";
import DoctorLIstSkeleton from "../../common/skeleton/DoctorLIstSkeleton";
import { useToast } from "@/app/context/ToastProvider";
import { useState } from "react";

interface IProps {
  loading: boolean;
  data: IDoctorList | undefined;
  setDoctorId: (doctorId: string, specialityId: string) => void;
  specialityId: {
    id: string | null;
    isFilter: string;
  }; // Passed from parent to maintain the selected specialty
}

function DoctorList({ loading, data, setDoctorId, specialityId }: IProps) {
  const toast = useToast();
  // Track selected specialization per doctor
  const [selectedSpecialties, setSelectedSpecialties] = useState<
    Record<string, string>
  >({});

  const handleSpecialtyChange = (
    doctorId: string,
    specializationId: string
  ) => {
    setSelectedSpecialties((prev) => ({
      ...prev,
      [doctorId]: specializationId,
    }));
  };

  const handleSelectDoctor = (doctorId: string, specializations: any[]) => {
    let selectedId = selectedSpecialties[doctorId];

    // If doctor has only one specialization, use that
    if (specializations.length === 1) {
      selectedId = specializations[0]._id;
    }

    if (!selectedId) {
      toast.error("Please select a specialty before booking.");
      return;
    }

    setDoctorId(doctorId, selectedId);
  };

  return (
    <Container>
      <Box style={{ padding: "2rem", backgroundColor: "primary" }}>
        <Typography variant="h4" gutterBottom align="center">
          Available Doctors
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => <DoctorLIstSkeleton key={index} />)
          : data?.doctors.map((doctor) => {
              const specializations = doctor.specializationId;
              const hasMultiple = specializations.length > 1;
              const selectedSpec = selectedSpecialties[doctor._id] || "";

              return (
                <Grid item xs={12} sm={6} md={4} key={doctor._id}>
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
                        {doctor.firstName} {doctor.lastName}
                      </Typography>

                      {/* Specialization Select or Chip */}
                      {hasMultiple ? (
                        <FormControl fullWidth sx={{ marginBottom: "1rem" }}>
                          <InputLabel>Select Specialty</InputLabel>
                          <Select
                            label="Select Specialty"
                            value={selectedSpec}
                            onChange={(e) =>
                              handleSpecialtyChange(doctor._id, e.target.value)
                            }
                          >
                            {specializations.map((spec) => (
                              <MenuItem key={spec._id} value={spec._id}>
                                {spec.title}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      ) : (
                        <Grid container justifyContent="center" spacing={1}>
                          {/* {doctor.specializationId.map((specialization) => (
                            <Grid item key={specialization._id}>
                              <Chip
                                label={specialization.title}
                                color="primary"
                              />
                            </Grid>
                          ))} */}
                          <Chip
                            label={specializations[0]?.title}
                            color="primary"
                          />
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
                            label={`${doctor.experience} years`}
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
                            href={`tel:${doctor.phone}`}
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
                            href={`mailto:${doctor.email}`}
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
                        {doctor.fullAddress.city}
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
                            onClick={() =>
                              handleSelectDoctor(doctor._id, specializations)
                            }
                          >
                            Book Appointment
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
      </Grid>
    </Container>
  );
}

export default DoctorList;
