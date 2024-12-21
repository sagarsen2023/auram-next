const emailOrPhoneValidator = (input: string) => {
  const isEmail = /\S+@\S+\.\S+/.test(input ?? "");
  const isPhone = /^\d{10}$/.test(input ?? "");

  if (!isEmail && !isPhone) {
    return { isEmail: false, isPhone: false };
  }

  return { isEmail, isPhone };
};

export default emailOrPhoneValidator;
