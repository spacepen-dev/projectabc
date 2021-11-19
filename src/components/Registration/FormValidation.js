const FormValidation = (values) => {
  let error = {};
  const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!values.name) {
    error.name = "Company name is required!";
  }
  if (!values.registration) {
    error.registration = "Registration number is required!";
  }
  if (!values.tin) {
    error.tin = "TIN is required!";
  }
  // if (!values.about) {
  // }
  // error.about = "Tell us about your company";

  if (!values.address) {
    error.address = "Company address is required!";
  }
  if (!values.email) {
    error.email = "Email is required!";
  } else if (!regexp.test(values.email)) {
    error.email = "Invalid Email address";
  }
  if (!values.website) {
    error.website = "Company website is required!";
  }
  if (!values.account) {
    error.account = "Account Name is required!";
  }
  if (!values.bank) {
    error.bank = "Bank details is required!";
  }
  if (!values.accountNumber) {
    error.accountNumber = "Account Number is required!";
  }
  return error;
};

export default FormValidation;
