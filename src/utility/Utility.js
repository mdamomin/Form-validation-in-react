export const validate = (values) => {
  const errors = {};
  const regex_username = /^[A-Z]{1,5}$/;
  const regex_email = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  const regex_password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (!values.firstName) {
    errors.firstNameErr = 'First Name is required!';
  } else if (values.firstName) {
    errors.firstNameErr = '';
  }

  if (!values.lastName) {
    errors.lastNameErr = 'Last Name is required!';
  } else if (values.lastName) {
    errors.lastNameErr = '';
  }

  if (!values.birthDate) {
    errors.birthDateErr = 'Birth Date is required!';
  } else if (values.birthDate) {
    errors.birthDateErr = '';
  }

  if (!values.username) {
    errors.usernameErr = 'Username is required!';
  } else if (!regex_username.test(values.username)) {
    errors.usernameErr =
      'Username should be uppercase and not exceed 5 characters';
  } else if (regex_username.test(values.username)) {
    errors.usernameErr = '';
  }

  if (!values.email) {
    errors.emailErr = 'Email is required!';
  } else if (!regex_email.test(values.email)) {
    errors.emailErr = 'Please enter valid email ID !';
  } else if (regex_email.test(values.email)) {
    errors.emailErr = '';
  }

  if (!values.password) {
    errors.passwordErr = 'Password is required!';
  } else if (!regex_password.test(values.password)) {
    errors.passwordErr = `Password must contain--
      1. at least 1 lowercase alphabetical character,
      2. at least 1 uppercase alphabetical character,
      3. at least 1 numeric character and
      4. at least one special character,
      5. must be eight characters or longer`;
  } else if (regex_password.test(values.password)) {
    errors.passwordErr = '';
  }

  if (!values.confirmPassword) {
    errors.confirmPasswordErr = 'Confirm Password is required!';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPasswordErr = 'Confirm Password is not matched!';
  } else if (values.password === values.confirmPassword) {
    errors.confirmPasswordErr = '';
  }

  return errors;
};
