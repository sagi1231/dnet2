const RegexValidations = {
  url: /^(ftp|http|https):\/\/[^ "]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
};

export default RegexValidations;
