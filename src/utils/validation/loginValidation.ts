const emailRegexp = new RegExp(/\S+@\S+\.\S+/);

interface IFormData {
  email: string;
  password: string;
}

export default (formData: IFormData) => {
  const { password, email } = formData;

  return !!(email.match(emailRegexp) && password.length > 8 && password.length < 22);
};
