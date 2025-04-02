import { CalendarToday, Email, Phone } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IDoctor, ISpecialties } from "../type/IDoctor";
import { useToast } from "../context/ToastProvider";
import { useState } from "react";
import adminFetch from "../axiosBase/interceptors";
import { useGlobalFetch } from "../customhook/useGloalFetch";

interface IProps {
  user: IDoctor | null; // Allow null
  setUser: React.Dispatch<React.SetStateAction<IDoctor | null>>;
}

function EditDoctorProfile({ user, setUser }: IProps) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { data: speciality } = useGlobalFetch<ISpecialties>("/speciality");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (user) {
      setUser((prevValue) => {
        if (!prevValue) return null; // Ensure prevValue is not null
        return {
          ...prevValue,
          [name]: value,
        } as IDoctor; // Explicitly cast to IDoctor
      });
    }
  };

  const handleSpecialtyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const selectedId = e.target.value;
    if (
      selectedId &&
      !user?.specializationId.some((s) => s._id === selectedId)
    ) {
      const selectedSpecialty = speciality?.specialities.find(
        (s) => s._id === selectedId
      );
      if (selectedSpecialty) {
        setUser((prevValue) => {
          if (!prevValue) return null; // Ensure prevValue is not null
          return {
            ...prevValue,
            specializationId: [
              ...prevValue?.specializationId,
              selectedSpecialty,
            ],
          };
        });
      }
    }
  };

  const deleteSpecialty = (id: string) => {
    setUser((prevValue) => {
      if (!prevValue) return null; // Ensure prevValue is not null
      return {
        ...prevValue,
        specializationId: prevValue.specializationId.filter(
          (d) => d._id !== id //Delete the Specialization id
        ),
      };
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await adminFetch.put("accounts/update", user);
      if (res.data) {
        setLoading(false);
        toast.success(res.data.msg);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex", // Flexbox layout
        alignItems: "center", // Vertically center the content
        justifyContent: "center", // Horizontally center the content
        padding: 9, // Optional: Adds some padding around the content
      }}
    >
      {user && (
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "#ffffff",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 8,
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <CardContent sx={{ padding: 4, paddingBottom: 2 }}>
              {/* Avatar and Profile Title */}
              {/* <Grid container justifyContent="center" sx={{ marginBottom: 3 }}>
            <Avatar
              alt={data.firstName + " " + data.lastName}
              src="https://randomuser.me/api/portraits/men/10.jpg"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: "4px solid #5360ea",
              }}
            />
          </Grid> */}
              <Typography
                variant="h5"
                textAlign="center"
                sx={{
                  fontWeight: "bold",
                  color: "#3f51b5",
                  marginBottom: 2,
                  textTransform: "capitalize",
                }}
              >
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="firstName"
                  type="text"
                  value={user.firstName}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="lastName"
                  type="text"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </Typography>

              {/* Accordion for Personal Information */}
              <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="personal-info-header"
                >
                  <Typography sx={{ fontWeight: "bold", color: "#3f51b5" }}>
                    Personal Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: 1 }}
                  >
                    <strong>Email:</strong> {user.email}
                    <Email
                      sx={{ verticalAlign: "middle", marginLeft: 1 }}
                      fontSize="small"
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: 1 }}
                  >
                    <strong>Phone:</strong>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="phone"
                      type="text"
                      value={user.phone}
                      onChange={handleChange}
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: 1 }}
                  >
                    <strong>Date of Birth:</strong> {user.dob.split("T")[0]}
                    <CalendarToday
                      sx={{ verticalAlign: "middle", marginLeft: 1 }}
                      fontSize="small"
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      marginBottom: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    <strong>Gender:</strong> {user.gender}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* Accordion for Professional Information */}
              <Accordion sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="professional-info-header"
                >
                  <Typography sx={{ fontWeight: "bold", color: "#3f51b5" }}>
                    Professional Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      marginBottom: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    <TextField
                      label="License Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="licenseNumber"
                      type="text"
                      value={user.licenseNumber}
                      onChange={handleChange}
                    />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: 3 }}
                  >
                    <TextField
                      label="Experience"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="experience"
                      type="text"
                      value={` ${user.experience} Years`}
                      onChange={handleChange}
                    />
                  </Typography>

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Speciality
                    </InputLabel>
                    <Select
                      name="specializationId"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Speciality"
                      onChange={(e: any) => handleSpecialtyChange(e)}
                    >
                      {speciality?.specialities.map((speciality) => (
                        <MenuItem
                          key={speciality._id}
                          value={speciality._id}
                          disabled={user.specializationId.some(
                            (spec) => spec._id === speciality._id
                          )}
                        >
                          {speciality.title}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Grid
                    container
                    justifyContent="start"
                    spacing={1}
                    marginY={2}
                  >
                    {user.specializationId.map((specialization) => (
                      <Grid item key={specialization._id}>
                        {/* <Chip
                          sx={{ textTransform: "capitalize" }}
                          variant="outlined"
                          label={specialization.title}
                          color="primary"
                        /> */}
                        <Chip
                          label={specialization.title}
                          variant="outlined"
                          onDelete={() => deleteSpecialty(specialization._id)}
                          sx={{ textTransform: "capitalize" }}
                          color="primary"
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <Typography
                    variant="body2"
                    sx={{ color: "#757575", marginBottom: 1 }}
                  >
                    <TextField
                      label="Fees In INR"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="fees"
                      type="text"
                      value={user.fees}
                      onChange={handleChange}
                    />
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* Accordion for Address Information */}
              <Accordion sx={{ marginBottom: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id="address-info-header"
                >
                  <Typography sx={{ fontWeight: "bold", color: "#3f51b5" }}>
                    Address Information
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingTop: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#757575",
                      marginBottom: 2,
                      textTransform: "capitalize",
                    }}
                  >
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="addressLine"
                      multiline
                      type="text"
                      value={user.fullAddress.addressLine}
                      onChange={handleChange}
                    />
                  </Typography>
                  <Grid2
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid2 size={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#757575",
                          marginBottom: 1,
                          textTransform: "capitalize",
                        }}
                      >
                        <TextField
                          label="City"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="city"
                          type="text"
                          value={user.fullAddress.city}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Grid2>
                    <Grid2 size={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#757575",
                          marginBottom: 1,
                          textTransform: "capitalize",
                        }}
                      >
                        <TextField
                          label="State"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="state"
                          type="text"
                          value={user.fullAddress.state}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Grid2>
                    <Grid2 size={6}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#757575",
                          marginBottom: 1,
                          textTransform: "capitalize",
                        }}
                      >
                        <TextField
                          label="Country"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="country"
                          type="text"
                          value={user.fullAddress.country}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Grid2>
                    <Grid2 size={6}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 3 }}
                      >
                        <TextField
                          label="Pincode"
                          variant="outlined"
                          fullWidth
                          margin="normal"
                          name="pincode"
                          type="text"
                          value={user.fullAddress.pincode}
                          onChange={handleChange}
                        />
                      </Typography>
                    </Grid2>
                  </Grid2>
                </AccordionDetails>
              </Accordion>
            </CardContent>

            {/* Edit Button Section */}
            <CardActions sx={{ justifyContent: "center", paddingBottom: 3 }}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: 20,
                  padding: "10px 20px",
                  boxShadow: 3,
                  "&:hover": {
                    boxShadow: 6,
                  },
                }}
              >
                Update Profile
              </Button>
            </CardActions>
          </form>
        </Card>
      )}
    </Container>
  );
}

export default EditDoctorProfile;
