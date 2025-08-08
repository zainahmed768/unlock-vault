export const signUpValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;

  // Validate first name
  if (!userData || !userData.first_name) {
    errors.first_name = ["First name is required"];
    isValid = false;
  } else if (userData.first_name.length > 20) {
    errors.first_name = ["First name must be under 20 characters"];
    isValid = false;
  }

  // Validate last name
  if (!userData || !userData.last_name) {
    errors.last_name = ["Last name is required"];
    isValid = false;
  } else if (userData.last_name.length > 20) {
    errors.last_name = ["Last name must be under 20 characters"];
    isValid = false;
  }

  // Validate email
  if (!userData || !userData.email) {
    errors.email = ["Email is required"];
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
    errors.email = ["Invalid email format"];
    isValid = false;
  }

  // Validate password
  if (!userData || !userData.password) {
    errors.password = ["Password is required"];
    isValid = false;
  } else if (userData.password.length < 8 || userData.password.length > 20) {
    errors.password = ["Password must be between 8 to 20 characters"];
    isValid = false;
  } else if (
    !/[A-Z]/.test(userData.password) // At least one uppercase letter
  ) {
    errors.password = ["Password must include at least one uppercase letter"];
    isValid = false;
  } else if (
    !/[a-z]/.test(userData.password) // At least one lowercase letter
  ) {
    errors.password = ["Password must include at least one lowercase letter"];
    isValid = false;
  } else if (
    !/[0-9]/.test(userData.password) // At least one digit
  ) {
    errors.password = ["Password must include at least one number"];
    isValid = false;
  } else if (
    !/[!@#$%^&*(),.?":{}|<>]/.test(userData.password) // At least one special character
  ) {
    errors.password = ["Password must include at least one special character"];
    isValid = false;
  }

  // Validate confirm password
  if (!userData || !userData.confirm_password) {
    errors.confirm_password = ["Confirm password is required"];
    isValid = false;
  } else if (userData.confirm_password !== userData.password) {
    errors.confirm_password = ["Passwords do not match"];
    isValid = false;
  }

  // Set errors and return validation status
  setFormErrors(errors);
  return isValid;
};
