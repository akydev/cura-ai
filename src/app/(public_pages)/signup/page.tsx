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
import authFetch from "@/app/axiosBase/custom";
import { IUserSignup } from "@/app/type/IUserSignup";
const initialValues: IUserSignup = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  gender: "",
  phone: "",
  addressLine: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

function page() {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<IUserSignup>(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData) {
      console.log("All fields are required");
      return;
    }

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      dob: formData.dob,
      gender: formData.gender,
      phone: formData.phone,
      fullAddress: {
        addressLine: formData.addressLine,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pincode: formData.pincode,
      },
    };
    try {
      setLoading(true);
      const res = await authFetch.post("/patients", data);
      if (res.data) {
        setLoading(false);
        setFormData(initialValues);
        setStep(0);
      }
    } catch (error: any) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
        <Grid2
          size={{ xs: 4, sm: 4, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              <form onSubmit={handleSubmit}>
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
                      name="firstName"
                      type="text"
                      value={formData.firstName} // Binding state to the input
                      error={formData.firstName === ""}
                      helperText={
                        formData.firstName === ""
                          ? "First Name is required"
                          : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="lastName"
                      type="text"
                      value={formData.lastName} // Binding state to the input
                      error={formData.lastName === ""}
                      helperText={
                        formData.lastName === "" ? "Last Name is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="email"
                      type="email"
                      value={formData.email} // Binding state to the input
                      error={formData.email === ""}
                      helperText={
                        formData.email === "" ? "Email is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="password"
                      value={formData.password} // Binding state to the input
                      error={formData.password === ""}
                      helperText={
                        formData.password === "" ? "Password is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="confirmPassword"
                      value={formData.confirmPassword} // Binding state to the input
                      error={formData.confirmPassword === ""}
                      helperText={
                        formData.confirmPassword === ""
                          ? "Confirm Password is required"
                          : ""
                      }
                      onChange={handleInputChange}
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
                      value={formData.dob} // Binding state to the input
                      error={formData.dob === ""}
                      helperText={
                        formData.dob === "" ? "Date of birth is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="gender"
                        row // Add this prop to make the radio buttons horizontal
                        value={formData.gender} // Set the value to the selected gender in formData
                        onChange={handleInputChange} // Call handleInputChange on change
                      >
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="phone"
                      value={formData.phone} // Binding state to the input
                      error={formData.phone === ""}
                      helperText={
                        formData.phone === "" ? "Phone number is required" : ""
                      }
                      onChange={handleInputChange}
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
                      label="Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="addressLine"
                      type="text"
                      value={formData.addressLine} // Binding state to the input
                      error={formData.addressLine === ""}
                      helperText={
                        formData.addressLine === "" ? "address is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="city"
                      type="text"
                      value={formData.city} // Binding state to the input
                      error={formData.city === ""}
                      helperText={
                        formData.city === "" ? "City is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="State"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="state"
                      type="text"
                      value={formData.state} // Binding state to the input
                      error={formData.state === ""}
                      helperText={
                        formData.state === "" ? "State is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="country"
                      type="text"
                      value={formData.country} // Binding state to the input
                      error={formData.country === ""}
                      helperText={
                        formData.country === "" ? "County is required" : ""
                      }
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="pincode"
                      type="number"
                      value={formData.pincode} // Binding state to the input
                      error={formData.pincode === ""}
                      helperText={
                        formData.pincode === "" ? "Pin code is required" : ""
                      }
                      onChange={handleInputChange}
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
                  {loading ? "Signing..." : "Sign up"}
                </Button>
              </form>
              <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                Already have an account?{" "}
                <a
                  href="/login"
                  style={{
                    textTransform: "none",
                    fontWeight: "bold",
                    textDecoration: "none",
                    color: "#1976d2",
                  }}
                >
                  Login here
                </a>
              </Typography>
            </Card>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
