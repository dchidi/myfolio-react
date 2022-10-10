// min = 1 indicates required field
// TODO:: TEXT VALIDAITON
export const textValidator = ({ text, min = 0, max = 0 }) => {};
export const emailValidator = (text) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/;

  if (text.match(validRegex)) {
    return { msg: "Valid Email Address", status: true };
  } else {
    return { msg: "Invalid Email Address", status: false };
  }
};
// TODO:: PHONE VALIDAITON
export const phoneValidator = ({ text, min = 0, max = 0 }) => {};
// TODO:: NUMBER VALIDAITON
export const numberValidator = ({
  text,
  min = 0,
  max = 0,
  dp = 2,
  type = "figure",
  separator = ",",
}) => {};
