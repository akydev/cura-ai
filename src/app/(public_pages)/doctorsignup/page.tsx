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
  InputLabel,
  MenuItem,
  MobileStepper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { IDoctorSignUp } from "@/app/type/IDoctorSignUp";
import doctorValidation from "@/app/common/validation/doctorValidation";
import authFetch from "@/app/axiosBase/custom";
import { useToast } from "@/app/context/ToastProvider";
import { useGlobalFetch } from "@/app/customhook/useGloalFetch";
import { ISpecialtyList } from "@/app/type/IDoctor";
const initialValues: IDoctorSignUp = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  licenseNumber: "",
  specializationId: "",
  experience: "",
  phone: "",
  addressLine: "",
  dob: "",
  gender: "",
  city: "",
  state: "",
  country: "",
  pincode: "",
};

function page() {
  const toast = useToast();
  const { data: speciality } = useGlobalFetch<ISpecialtyList>("/speciality");
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
      1: ["licenseNumber", "specializationId", "experience", "phone"],
      2: [
        "addressLine",
        "dob",
        "gender",
        "city",
        "state",
        "country",
        "pincode",
      ],
    };

    const currentStepFields = stepFields[step] || [];

    const fieldErrors = currentStepFields.reduce((acc, key) => {
      // Validate specific fields for the current step
      const fieldError = doctorValidation({
        name: key,
        value: formData[key as keyof IDoctorSignUp], // Get the value of the field
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

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({
      ...prevError,
      [name]: fieldError || "", // Update only the relevant field error
    }));

    // Only validate the changed field
    const fieldError = doctorValidation({
      name,
      value,
      formValues: { ...formData, [name]: value }, // Pass the updated form values
      step: step, // Current step number
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // First, validate the form before submitting
    if (!validateForm()) {
      return; // If validation fails, prevent form submission.
    }

    if (!formData) {
      return; // If form data is empty, prevent form submission.
    }

    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      licenseNumber: formData.licenseNumber,
      specializationId: formData.specializationId,
      experience: formData.experience,
      phone: formData.phone,
      dob: formData.dob,
      gender: formData.gender,
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
      // Call the API to submit the form data
      const res = await authFetch.post("/doctors", data);
      if (res.data) {
        setLoading(false);
        setFormData(initialValues);
        setStep(0);
      }

      setTimeout(() => (window.location.href = "/login"), 1000);
    } catch (error: any) {
      setLoading(false);
      // console.error(error);
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
      {/* main Grid */}
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

                {/* step2 */}
                {step === 1 && (
                  <>
                    <Typography variant="h6" component="h6">
                      Step2
                    </Typography>
                    <TextField
                      label="Licence Number"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="licenseNumber"
                      type="text"
                      value={formData.licenseNumber}
                      error={!!error.licenseNumber}
                      helperText={error.licenseNumber || ""}
                      onChange={handleInputChange}
                    />

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Speciality
                      </InputLabel>
                      <Select
                        name="specializationId"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Speciality"
                        onChange={(e: any) => handleInputChange(e)}
                        value={formData.specializationId}
                      >
                        {speciality?.specialities.map((speciality) => (
                          <MenuItem key={speciality._id} value={speciality._id}>
                            {speciality.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <TextField
                      label="Experience"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      name="experience"
                      type="text"
                      value={formData.experience}
                      error={!!error.experience}
                      helperText={error.experience || ""}
                      onChange={handleInputChange}
                    />

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
                      type="text"
                      name="addressLine"
                      value={formData.addressLine}
                      error={!!error.addressLine}
                      helperText={error.addressLine || ""}
                      onChange={handleInputChange}
                    />
                    <TextField
                      label="Date of birth"
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
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
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
