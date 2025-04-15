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
import { IUser } from "../../type/IUser";
import { useState } from "react";
import adminFetch from "../../axiosBase/interceptors";
import { useToast } from "../../context/ToastProvider";

interface IProps {
  user: IUser | null; // Allow null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  handleClick: (type: string) => void;
}

function EditProfile({ user, setUser, handleClick }: IProps) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

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
        } as IUser; // Explicitly cast to IUser
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await adminFetch.put("accounts/update", user);
      if (res.data) {
        setLoading(false);
        toast.success(res.data.msg);
        setTimeout(() => handleClick("details"), 1000); // Redirect to the details view after 1 seconds
      }
    } catch (error: any) {
      if (error) {
        setLoading(false);
        toast.error(error.response.data.msg);
      }
    }
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex", // Flexbox layout
        alignItems: "center", // Vertically center the content
        justifyContent: "center", // Horizontally center the content
        padding: 6, // Optional: Adds some padding around the content
      }}
    >
      {user && (
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            boxShadow: 3,
            borderRadius: 3,
            backgroundColor: "primary",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: 8,
            },
            padding: 3,
          }}
        >
          <Typography variant="h5" textAlign="center">
            Edit Profile Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <CardContent sx={{ paddingBottom: 2 }}>
              <Grid2
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                paddingBottom={1}
              >
                <Grid2 size={6}>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    sx={{
                      fontWeight: "bold",
                      color: "#3f51b5",
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
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography
                    variant="h5"
                    textAlign="center"
                    sx={{
                      fontWeight: "bold",
                      color: "#3f51b5",
                      textTransform: "capitalize",
                    }}
                  >
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
                </Grid2>
              </Grid2>

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
                  </Typography>

                  <Grid2
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid2 size={6}>
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 1 }}
                      >
                        <strong>Date of Birth:</strong> {user.dob.split("T")[0]}
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
                        <strong>Gender:</strong> {user.gender}
                      </Typography>
                    </Grid2>
                  </Grid2>

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
                  <Grid2
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid2 size={6}>
                      <TextField
                        label="City"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="city"
                        type="text"
                        value={user.fullAddress.city}
                        onChange={handleChange}
                        sx={{ input: { textTransform: "capitalize" } }}
                      />
                    </Grid2>
                    <Grid2 size={6}>
                      <TextField
                        label="State"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="state"
                        type="text"
                        value={user.fullAddress.state}
                        onChange={handleChange}
                        sx={{ input: { textTransform: "capitalize" } }}
                      />
                    </Grid2>
                    <Grid2 size={6}>
                      <TextField
                        label="Country"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="country"
                        type="text"
                        value={user.fullAddress.country}
                        onChange={handleChange}
                        sx={{ input: { textTransform: "capitalize" } }}
                      />
                    </Grid2>
                    <Grid2 size={6}>
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
                    </Grid2>
                  </Grid2>
                </AccordionDetails>
              </Accordion>
            </CardContent>

            {/* Edit Button Section */}
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
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

export default EditProfile;
