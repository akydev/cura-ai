import {
  nameRegex,
  emailRegex,
  phoneRegex,
  pincodeRegex,
} from "@/app/regularExpressions/regex";
import { validatePassword } from "./passwordValidation";

interface IValidation {
  name: string;
  value: string;
  formValues: { password: string };
  step: number;
}

// Common input validation function
const doctorValidation = ({
  name,
  value,
  formValues,
  step,
}: IValidation): string | null => {
  const requiredFields: Record<number, Record<string, string>> = {
    0: {
      firstName: "First Name is required",
      lastName: "Last Name is required",
      email: "Email is required",
      password: "Password is required",
      confirmPassword: "Confirm Password is required",
    },
    1: {
      licenseNumber: "License Number is required",
      specializationId: "Specialization is required",
      experience: "Experience is required",
      phone: "Phone number is required",
    },
    2: {
      addressLine: "Address is required",
      dob: "Date of Birth is required",
      gender: "Please select the gender",
      city: "City is required",
      state: "State is required",
      country: "Country is required",
      pincode: "Pincode is required",
    },
  };

  // Skip validation if field is not required for this step
  if (!requiredFields[step]?.[name]) {
    return null;
  }

  // Check if the field value is empty
  if (!value) {
    return requiredFields[step][name]; // Required field message
  }

  // Field-specific validation
  switch (name) {
    case "firstName":
    case "lastName":
      // Validate name fields
      return !nameRegex.test(value)
        ? `${
            name === "firstName" ? "First" : "Last"
          } Name should contain only letters`
        : null;
    case "email":
      // Validate email address
      return !emailRegex.test(value) ? "Invalid email address" : null;
    case "password":
      // Validate password
      return validatePassword(value);
    case "confirmPassword":
      // Validate confirm password
      return value !== formValues.password ? "Passwords do not match" : null;
    case "phone":
      // Validate phone number
      return step === 1 && !phoneRegex.test(value)
        ? "Phone number should be 10 digits long"
        : null;

    case "pincode":
      // Validate pincode
      return step === 2 && !pincodeRegex.test(value)
        ? "Pincode should be 6 digits long"
        : null;
    default:
      return null;
  }
};

export default doctorValidation;
