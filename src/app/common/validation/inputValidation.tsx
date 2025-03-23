import {
  uppercaseRegex,
  lowercaseRegex,
  specialCharRegex,
  numberRegex,
  noWhitespaceRegex,
  lengthRegex,
} from "@/app/regularExpressions/regex";

// write a function to validate password separately
export function validatePassword(value: string) {
  if (!value) return "Password is required";
  if (!uppercaseRegex.test(value))
    return "Password must contain at least one uppercase letter";
  if (!lowercaseRegex.test(value))
    return "Password must contain at least one lowercase letter";
  if (!specialCharRegex.test(value))
    return "Password must contain at least one special character";
  if (!numberRegex.test(value))
    return "Password must contain at least one number";
  if (!noWhitespaceRegex.test(value))
    return "Password must not contain any whitespace";
  if (!lengthRegex.test(value))
    return "Password must be at least 8 characters long";

  return "";
}

// common input validation function
export const inputValidation = (
  name: string,
  value: string,
  formValues: any,
  step: number,
  userType: string
) => {};
