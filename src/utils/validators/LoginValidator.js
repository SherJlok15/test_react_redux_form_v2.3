let passwordInfo = {
  required: false,
  valid: false,
  pass: null,
}

export const required = value => {
  if (value) return undefined;
  return 'Field is required';
}

export const validateName = value => {
  var regName = /^[a-zA-Z]{2,}$/;
  if (regName.test(value)) return undefined;
  return 'Wrong name';
}

export const validatePhone = value => {
  var regPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  if (regPhone.test(value)) return undefined;
  return 'Invalid phone number';
}

export const validateEmail = value => {
  var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEmail.test(value)) return undefined;
  return 'Invalid email';
}

export const validatePassword = value => {
  var regPassword  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (regPassword.test(value)) {
    passwordInfo.pass = value;
    return undefined;
  }
  passwordInfo.pass = null;
  return 'Bed password';
}

export const validatePasswordConfirm = value => {
  if (value === passwordInfo.pass) {
    passwordInfo.pass = null;
    return undefined;
  }
  return 'Your passwords do not match';
}

export const validateCheckBox = (value) => {
  console.log(value)
  if (value) return undefined;
  return ' Need 1111 checked';
}
