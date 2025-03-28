import { Box, Typography, Button } from "@mui/material";

const HeroSection = () => (
  <Box
    sx={{
      position: "relative",
      height: "100vh",
      // backgroundImage: 'url("/images/hero-background.png")',
      backgroundColor: "black",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      textAlign: "center",
    }}
  >
    <Box
      sx={{
        position: "relative",
        zIndex: 2, // Ensure the text is above the overlay
        maxWidth: "80%",
        overflowX: "hidden",
        padding: "0 20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          marginBottom: 3,
          fontWeight: "regular",
          textAlign: "center",
          paddingBottom: 3,
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
        }}
      >
        Providing compassionate, expert care with a focus on your health and
        well-being every step of the way.
        {/* Trusted care for you and your family. */}
      </Typography>

      <Typography
        variant="h3"
        // color="#c03bff"
        sx={{
          fontSize: { xs: "48px", sm: "60px", md: "84px" },
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        {/* Your Health, Our Priority. */}
        {/* Digital Experiences */}
        {/* Cura Ai */}
        CURA AI
      </Typography>

      <Button variant="contained" color="primary" href="#gallery">
        View More
      </Button>
    </Box>
  </Box>
);

export default HeroSection;
