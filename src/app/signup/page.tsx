"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  MobileStepper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
const initialValues = {
  // step-1
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  // step-2
  dob: "",
  gender: "",
  phone: "",
  // step3
  addressLine: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

function page() {
  const [step, setStep] = useState(0);
  const prevStep = () => {
    setStep(step - 1);
  };
  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
        {/* Left Section (Logo and Welcome Message) */}
        <Grid2 size={{ xs: 4, sm: 4, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src="/logo/cura-ai.png"
              alt="Logo"
              style={{
                width: "50%",
                maxWidth: "200px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            <Typography variant="h4" sx={{ mt: 3 }}>
              Welcome to Our Platform
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Join us and experience something amazing!
            </Typography>
          </Box>
        </Grid2>

        {/* Right Section (Login Card) */}
        <Grid2 size={{ xs: 4, sm: 4, md: 6 }}>
          <Card variant="outlined">
            <Card sx={{ padding: 3 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Create Account
              </Typography>
              <form>
                {/* step1 */}

                {step === 0 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step1
                    </Typography>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="firstname"
                      type="text"
                    />
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="lastname"
                      type="text"
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="email"
                      type="email"
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="password"
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="confirmpass"
                      error
                    />
                  </>
                )}

                {/* step2 */}
                {step === 1 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step2
                    </Typography>
                    <TextField
                      label="Date of birth"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="dob"
                      type="date"
                    />
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        row // Add this prop to make the radio buttons horizontal
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="phone"
                    />
                  </>
                )}

                {/* step3 */}
                {step === 2 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step3
                    </Typography>
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="city"
                      type="text"
                    />
                    <TextField
                      label="State"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="state"
                      type="text"
                    />
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="country"
                      type="text"
                    />
                    <TextField
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="pincode"
                      type="number"
                    />
                  </>
                )}

                <MobileStepper
                  variant="dots"
                  steps={3}
                  position="static"
                  activeStep={step}
                  sx={{ maxWidth: 400, flexGrow: 1 }}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 2}
                    >
                      Next
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={prevStep}
                      disabled={step === 0}
                    >
                      <KeyboardArrowLeft />
                      Back
                    </Button>
                  }
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{ marginTop: 2 }}
                >
                  Sign up
                </Button>
              </form>
              <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                Already have an account?{" "}
                <Button href="/login" sx={{ textTransform: "none" }}>
                  Login here
                </Button>
              </Typography>
            </Card>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
