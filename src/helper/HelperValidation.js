export const signUpValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;
  console.log("from signup", userData);
  // Validate first name
  if (!userData || !userData.fname) {
    errors.fname = ["First name is required"];
    isValid = false;
  } else if (userData.fname.length > 15) {
    errors.fname = ["First name must be under 15 characters"];
    isValid = false;
  }

  // Validate last name
  if (!userData || !userData.lname) {
    errors.lname = ["Last name is required"];
    isValid = false;
  } else if (userData.lname.length > 15) {
    errors.lname = ["Last name must be under 15 characters"];
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

export const VerifyOtpValidation = (otp, setFormErrors) => {
  let errors = {};
  let isValid = true;

  // Validate OTP
  if (!otp || !otp) {
    errors.otp = ["OTP is required"];
    isValid = false;
  } else if (!/^\d{6}$/.test(otp)) {
    errors.otp = ["OTP must be a 6-digit number"];
    isValid = false;
  }
  setFormErrors(errors);
  return isValid;
};

export const PasswordValidation = (passwordState, setFormErrors) => {
  let isValid = true;
  let errors = {};

  // Validate New Password
  if (!passwordState?.password) {
    errors.password = ["New password is required"];
    isValid = false;
  } else if (passwordState?.password.length < 8) {
    errors.password = ["New password must be atleast 8 characters"];
    isValid = false;
  }

  // Validate Confirm Password
  if (!passwordState?.confirm_password) {
    errors.confirm_password = ["Confirm password is required"];
    isValid = false;
  } else if (passwordState?.confirm_password !== passwordState?.password) {
    errors.confirm_password = ["Confirm password must match the new password"];
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};

export const UpdateProfileValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;
  console.log(userData, "userData");

  // ✅ First name (only if provided)
  if (userData?.first_name) {
    if (userData.first_name.length > 15) {
      errors.first_name = ["First name must be under 15 characters"];
      isValid = false;
    }
  }

  // ✅ Last name (only if provided)
  if (userData?.last_name) {
    if (userData.last_name.length > 15) {
      errors.last_name = ["Last name must be under 15 characters"];
      isValid = false;
    }
  }

  // ✅ Email (only if provided)
  if (userData?.email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.email = ["Invalid email format"];
      isValid = false;
    }
  }

  // ✅ Phone number (only if provided)
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

  setFormErrors(errors);
  return isValid;
};

export const ChangePasswordValidation = (userData, setFormErrors) => {
  let errors = {};
  let isValid = true;
  console.log(userData, "changePasswordData");

  // ✅ Current password (required)
  if (!userData?.current_password) {
    errors.current_password = ["Current password is required"];
    isValid = false;
  }

  // ✅ New password (required + length rules)
  if (!userData?.new_password) {
    errors.new_password = ["New password is required"];
    isValid = false;
  } else if (userData.new_password.length < 8) {
    errors.new_password = ["New password must be at least 8 characters"];
    isValid = false;
  } else if (userData.new_password.length > 20) {
    errors.new_password = ["New password must not be greater than 20 characters"];
    isValid = false;
  }

  // ✅ Confirm password (must match new password)
  if (!userData?.new_password_confirmation) {
    errors.new_password_confirmation = ["Password confirmation is required"];
    isValid = false;
  } else if (userData.new_password !== userData.new_password_confirmation) {
    errors.new_password_confirmation = ["Passwords do not match"];
    isValid = false;
  }

  setFormErrors(errors);
  return isValid;
};
