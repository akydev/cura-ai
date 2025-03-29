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
  Grid,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IDoctor } from "../type/IDoctor";

interface IProps {
  user: IDoctor | null; // Allow null
  setUser: React.Dispatch<React.SetStateAction<IDoctor | null>>;
}

function EditDoctorProfile({ user, setUser }: IProps) {
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
              />
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="lastName"
                type="text"
                value={user.lastName}
              />
            </Typography>

            <Grid container justifyContent="start" spacing={1} marginBottom={2}>
              {user.specializationId.map((specialization) => (
                <Grid item key={specialization._id}>
                  <Chip
                    sx={{ textTransform: "capitalize" }}
                    variant="outlined"
                    label={specialization.title}
                    color="primary"
                  />
                </Grid>
              ))}
            </Grid>

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
                  />
                </Typography>
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
        </Card>
      )}
    </Container>
  );
}

export default EditDoctorProfile;
