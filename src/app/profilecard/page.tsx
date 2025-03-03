import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CardActions,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Phone, Email, LocationOn, CalendarToday } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ProfileCard = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 5,
      }}
    >
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
          <Grid container justifyContent="center" sx={{ marginBottom: 3 }}>
            <Avatar
              alt="Dr. John Doe"
              src="https://randomuser.me/api/portraits/men/10.jpg"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                border: "4px solid #5360ea",
              }}
            />
          </Grid>

          <Typography
            variant="h5"
            textAlign="center"
            sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: 2 }}
          >
            Dr. John Doe
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ color: "#757575", marginBottom: 3 }}
          >
            Cardiology Specialist
          </Typography>

          {/* Accordion for Personal Information */}
          <Accordion sx={{ marginBottom: 2 }}>
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
                <strong>Email:</strong> john.doe@example.com
                <Email
                  sx={{ verticalAlign: "middle", marginLeft: 1 }}
                  fontSize="small"
                />
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>Phone:</strong> (123) 456-7890
                <Phone
                  sx={{ verticalAlign: "middle", marginLeft: 1 }}
                  fontSize="small"
                />
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>Date of Birth:</strong> 01/01/1985
                <CalendarToday
                  sx={{ verticalAlign: "middle", marginLeft: 1 }}
                  fontSize="small"
                />
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
                Professional Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingTop: 0 }}>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>Specialization:</strong> Cardiology
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>License Number:</strong> ABC123456
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 3 }}
              >
                <strong>Experience:</strong> 10 years
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Address Information */}
          <Typography variant="h6" sx={{ color: "#3f51b5", marginBottom: 2 }}>
            Address Information
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#757575", marginBottom: 1 }}
          >
            <strong>Address:</strong> 123 Main St, Apt 4B
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>City:</strong> City
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body2"
                sx={{ color: "#757575", marginBottom: 1 }}
              >
                <strong>State:</strong> State
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            sx={{ color: "#757575", marginBottom: 1 }}
          >
            <strong>Country:</strong> Country
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#757575", marginBottom: 3 }}
          >
            <strong>Zip Code:</strong> 10001
          </Typography>
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
            Edit Profile
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ProfileCard;
