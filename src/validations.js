const isRequired = (value, name) => {
  if (!value) throw new Error(`${name} should not be empty.`);
};

const isNumber = (value, name) => {
  if (!value.match(/^[0-9]+$/))
    throw new Error(`${name} should contain only numbers.`);
};

const isAlphabet = (value, name) => {
  if (!value.match(/^[a-zA-Z]+$/))
    throw new Error(`${name} should contain only alphabets.`);
};

const isEmailFormat = (value, name) => {
  if (!value.match(/\S+@\S+\.\S+/))
    throw new Error(`${name} is not in email format`);
};

const isValidPhone = (value, name) => {
  isNumber(value, name);
  if (value.length !== 10)
    throw new Error("Phone number should have exactly ten digits.");
  if (!value.match(/^[6789]/))
    throw new Error("Phone number should start from (6, 7, 8, 9).");
};

const isValidAccount = (value, name) => {
  isNumber(value, name);

  if (value.length < 11 || value.length > 16)
    throw new Error(`${name} length should be in range 11 to 16.`);
};

export { isRequired, isNumber, isAlphabet, isEmailFormat };
export { isValidPhone, isValidAccount };
