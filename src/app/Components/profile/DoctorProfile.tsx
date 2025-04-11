import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Grid2,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarToday, Email, Phone } from "@mui/icons-material";
import { IDoctor } from "../../type/IDoctor";

interface IProps {
  data: IDoctor | null;
  handleClick: (type: string) => void;
}
const DoctorProfile = ({ data, handleClick }: IProps) => {
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
      {data && (
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
              {data.firstName} {data.lastName}
            </Typography>

            <Grid container justifyContent="start" spacing={1} marginBottom={2}>
              {data.specializationId.map((specialization) => (
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
                  <strong>Email:</strong> {data.email}
                  <Email
                    sx={{ verticalAlign: "middle", marginLeft: 1 }}
                    fontSize="small"
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>Phone:</strong> {data.phone}
                  <Phone
                    sx={{ verticalAlign: "middle", marginLeft: 1 }}
                    fontSize="small"
                  />
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>Date of Birth:</strong> {data.dob.split("T")[0]}
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
                  <strong>Gender:</strong> {data.gender}
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
                  <strong>License Number:</strong> {data.licenseNumber}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>Experience:</strong>
                  {` ${data.experience} Years`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 3 }}
                >
                  <strong>Fees:</strong> {data.fees} INR
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
                  <strong>Address:</strong> {data.fullAddress.addressLine}
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
                      <strong>City:</strong> {data.fullAddress.city}
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
                      <strong>State:</strong> {data.fullAddress.state}
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
                      <strong>Country:</strong> {data.fullAddress.country}
                    </Typography>
                  </Grid2>
                  <Grid2 size={6}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#757575", marginBottom: 3 }}
                    >
                      <strong>Zip Code:</strong> {data.fullAddress.pincode}
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
              onClick={() => handleClick("edit")}
            >
              Edit Profile
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default DoctorProfile;
