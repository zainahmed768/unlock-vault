export const signUpValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;
  console.log("from signup", userData);
  // Validate first name
  if (!userData || !userData.fname) {
    errors.fname = ["First name is required"];
    isValid = false;
  } else if (userData.fname.length > 20) {
    errors.fname = ["First name must be under 20 characters"];
    isValid = false;
  }

  // Validate last name
  if (!userData || !userData.lname) {
    errors.lname = ["Last name is required"];
    isValid = false;
  } else if (userData.lname.length > 20) {
    errors.lname = ["Last name must be under 20 characters"];
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

  if (userData?.phone_number) {
    // Check if the phone number format is valid
    if (
      !/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm.test(
        userData.phone_number
      )
    ) {
      if (!errors.phone_number) errors.phone_number = [];
      errors.phone_number.push("Phone number is not valid");
      isValid = false;
    }
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
  if (!userData || !userData.password_confirm) {
    errors.password_confirm = ["Confirm password is required"];
    isValid = false;
  } else if (userData.password_confirm !== userData.password) {
    errors.password_confirm = ["Passwords do not match"];
    isValid = false;
  }

  // Set errors and return validation status
  setFormErrors(errors);
  return isValid;
};

export const signInValidation = (userData, setFormErrors) => {
  let isValid = true;
  let errors = {};

  if (!userData || !userData?.email) {
    if (!errors || !errors?.email) {
      if (!errors) errors = {};
      errors.email = [];
    }
    errors?.email?.push("Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData?.email)) {
    if (!errors || !errors?.email) {
      if (!errors) errors = {};
      errors.email = [];
    }
    errors?.email?.push("Invalid email format");
    isValid = false;
  }

  if (!userData || !userData?.password) {
    if (!errors || !errors?.password) {
      if (!errors) errors = {};
      errors.password = [];
    }
    errors?.password?.push("Password is required");
    isValid = false;
  } else if (
    userData?.password?.length < 0 ||
    userData?.password?.length > 20
  ) {
    if (!errors || !errors?.password) {
      if (!errors) errors = {};
      errors.password = [];
    }
    errors?.password?.push("Password must be between 7 to 20 characters");
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export const checkEmailValidation = (email, setFormErrors) => {
  let errors = {};
  let isValid = true;

  if (!email || !email) {
    errors.email = ["Email is required"];
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Invalid email format"];
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};
