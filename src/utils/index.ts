const isValidEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const validatePhoneNumber = (phoneNumber: string) => {
  // const re=/^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
  const re =
    /^\+(\d{1,3})?[-. ]?(\(?\d{1,3}\)?)?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,4}$/;

  return re.test(phoneNumber);
};

export { isValidEmail, validatePhoneNumber };
