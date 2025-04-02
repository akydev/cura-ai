import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CalendarToday, Email, Phone } from "@mui/icons-material";
import { IUser } from "../../type/IUser";

interface IProps {
  data: IUser | null;
  handleClick: (type: string) => void;
}

const UserProfile = ({ data, handleClick }: IProps) => {
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
            height: "auto",
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
              sx={{ fontWeight: "bold", color: "#3f51b5", marginBottom: 2 }}
            >
              {data.firstName} {data.lastName}
            </Typography>
            {/* <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ color: "#757575", marginBottom: 3 }}
          >
            Cardiology Specialist
          </Typography> */}

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
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>Gender:</strong> {data.gender}
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
              <strong>Address:</strong> {data.fullAddress.addressLine}
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: 2 }}>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>City:</strong> {data.fullAddress.city}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  sx={{ color: "#757575", marginBottom: 1 }}
                >
                  <strong>State:</strong> {data.fullAddress.state}
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              sx={{ color: "#757575", marginBottom: 1 }}
            >
              <strong>Country:</strong> {data.fullAddress.country}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#757575", marginBottom: 3 }}
            >
              <strong>Zip Code:</strong> {data.fullAddress.pincode}
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

export default UserProfile;
