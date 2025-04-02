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
const validateField = ({
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
      dob: "Date of Birth is required",
      gender: "Please select the gender",
      phone: "Phone number is required",
    },
    2: {
      addressLine: "Address is required",
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

export default validateField;

// // In the above code, we have created a function  inputValidation  that takes the field name, value, formValues, step, and userType as arguments. The  inputValidation  function checks if the field is required for the current step and if the field is empty. If the field is required and empty, it returns the required field message.
// // If the field is not empty, it performs field-specific validation based on the field name. For example, it validates the first name and last name fields using the  nameRegex  regular expression. Similarly, it validates the email field using the  emailRegex  regular expression.
// // The  validatePassword  function is used to validate the password field. It checks if the password contains at least one uppercase letter, one lowercase letter, one special character, one number, no whitespace, and is at least 8 characters long.
// // This way, you can create a common input validation function that can be used to validate different types of input fields in a form.
// // Conclusion
// // In this article, we have learned how to create a common input validation function in React using TypeScript. We have created a common input validation function that can be used to validate different types of input fields in a form.
// // The common input validation function takes the field name, value, formValues, step, and userType as arguments. It checks if the field is required for the current step and if the field is empty. If the field is required and empty, it returns the required field message.
// // If the field is not empty, it performs field-specific validation based on the field name. For example, it validates the first name and last name fields using the  nameRegex  regular expression. Similarly, it validates the email field using the  emailRegex  regular expression.
// // I hope this article has helped you understand how to create a common input validation function in React using TypeScript.
// // The post  How to Create a Common Input Validation Function in React using TypeScript appeared firstjson on  positronX.io.
// // ]]>

// // In this tutorial, we will learn how to create a custom hook in React using TypeScript. We will create a custom hook that fetches data from an API and returns the data, loading, and error states.
// // Custom hooks are a powerful feature in React that allows you to reuse logic across multiple components. You can create custom hooks to encapsulate logic and share it between components.
// // Let’s create a custom hook in React using TypeScript.
