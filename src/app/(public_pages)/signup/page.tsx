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
import Link from "next/link";
import validateField from "@/app/utility/validation/validation";
import { useToast } from "@/app/context/ToastProvider";
import { SVGBrandImage } from "@/app/assets/SVGIcons";
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
  const toast = useToast();
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Record<string, string>>({});

  // Validate the form before moving to the next step
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Validate fields based on the current step
    const stepFields: Record<number, string[]> = {
      0: ["firstName", "lastName", "email", "password", "confirmPassword"],
      1: ["dob", "gender", "phone"],
      2: ["addressLine", "city", "state", "country", "pincode"],
    };

    const currentStepFields = stepFields[step] || [];

    const fieldErrors = currentStepFields.reduce((acc, key) => {
      // Validate specific fields for the current step
      const fieldError = validateField({
        name: key,
        value: formData[key as keyof IUserSignup], // Get the value of the field
        formValues: formData, // Pass the whole form data for inter-field validation (e.g. confirmPassword)
        step: step, // Current step number
      });

      if (fieldError) {
        acc[key] = fieldError; // Store the error message if validation fails
      }
      return acc;
    }, {} as Record<string, string>);

    // Merge the errors into the main errors object
    Object.assign(errors, fieldErrors);

    setError(errors); // Update the error state
    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const prevStep = () => setStep(step - 1);
  const nextStep = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({
      ...prevError,
      [name]: fieldError || "", // Update only the relevant field error
    }));

    // Only validate the changed field
    const fieldError = validateField({
      name,
      value,
      formValues: { ...formData, [name]: value }, // Pass the updated form values
      step: step, // Current step number
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // First, validate all fields for the last step before submitting
    if (!validateForm()) {
      return; // If form validation fails, prevent form submission
    }

    if (!formData) {
      // console.log("All fields are required");
      return; // If form data is empty, prevent form submission.
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
      setTimeout(() => (window.location.href = "/login"), 1000);
    } catch (error: any) {
      setLoading(false);
      // console.error("Error during sign-up", error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
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
            {/* Brand Logo Here */}
            <SVGBrandImage />

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
                {/* Step 1 */}
                {step === 0 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step 1
                    </Typography>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      error={!!error.firstName}
                      helperText={error.firstName || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      error={!!error.lastName}
                      helperText={error.lastName || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="email"
                      type="email"
                      value={formData.email}
                      error={!!error.email}
                      helperText={error.email || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="password"
                      value={formData.password}
                      error={!!error.password}
                      helperText={error.password || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      error={!!error.confirmPassword}
                      helperText={error.confirmPassword || ""}
                      onChange={handleInputChange}
                    />
                  </>
                )}

                {/* Step 2 */}
                {step === 1 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step 2
                    </Typography>
                    <TextField
                      label="Date of Birth"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      error={!!error.dob}
                      helperText={error.dob || ""}
                      onChange={handleInputChange}
                    />
                    <FormControl error={!!error.gender}>
                      <FormLabel>Gender</FormLabel>

                      <RadioGroup
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        row
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
                      value={formData.phone}
                      error={!!error.phone}
                      helperText={error.phone || ""}
                      onChange={handleInputChange}
                    />
                  </>
                )}

                {/* Step 3 */}
                {step === 2 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step 3
                    </Typography>
                    <TextField
                      label="Address"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="addressLine"
                      type="text"
                      value={formData.addressLine}
                      error={!!error.addressLine}
                      helperText={error.addressLine || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="City"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="city"
                      value={formData.city}
                      error={!!error.city}
                      helperText={error.city || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="State"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="state"
                      value={formData.state}
                      error={!!error.state}
                      helperText={error.state || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Country"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="country"
                      value={formData.country}
                      error={!!error.country}
                      helperText={error.country || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="pincode"
                      value={formData.pincode}
                      error={!!error.pincode}
                      helperText={error.pincode || ""}
                      onChange={handleInputChange}
                    />
                  </>
                )}

                <MobileStepper
                  variant="dots"
                  steps={3}
                  position="static"
                  activeStep={step}
                  sx={{ maxWidth: "100%", flexGrow: 1 }}
                  nextButton={
                    <Button
                      size="small"
                      onClick={nextStep}
                      disabled={step === 2} // Disable next if there are errors
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
                  disabled={loading}
                >
                  {loading ? "Signing..." : "Sign Up"}
                </Button>
              </form>
              <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
                Already have an account?{" "}
                <Link
                  href="/login"
                  color="primary"
                  style={{
                    textTransform: "none",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Login here
                </Link>
              </Typography>
            </Card>
          </Card>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default page;
