export const scrollToTop = () => window.scrollTo(0, 0);

export const isValidEmail = (value) => {
  if (!value) {
    throw new Error("Email should not be empty.");
  } else if (!value.match(/\S+@\S+\.\S+/)) {
    throw new Error("Email is not in proper format");
  }
};

export const isValidName = (value, name) => {
  if (!value) {
    throw new Error(`${name || "Name"} should not be empty.`);
  } else if (!value.match(/^[a-zA-Z]+$/)) {
    throw new Error(`${name || "Name"} should only contain alphabets.`);
  }
};

export const isValidPhone = (value) => {
  if (!value) {
    throw new Error("Phone number should not be empty.");
  } else if (!value.match(/^[0-9]+$/)) {
    throw new Error("Phone number should contain only numbers.");
  } else if (value.length !== 10) {
    throw new Error("Phone number should have exactly ten digits.");
  } else if (!value.match(/^[6789]/)) {
    throw new Error("Phone number should start from (6, 7, 8, 9).");
  }
};

export const isValidService = (value) => {
  if (!value) throw new Error("Service should not be empty.");
};

export const isValidDate = (value) => {
  if (!value) throw new Error("Date should not be empty.");
};

export const isValidAccount = (value) => {
  if (!value) {
    throw new Error("Account should not be empty.");
  } else if (!value.match(/^[0-9]+$/)) {
    throw new Error("Account number should contain only numbers.");
  } else if (value.length < 11 || value.length > 16) {
    throw new Error("Account number length should be in range 11 to 16.");
  }
};

export const isValidAmount = (value) => {
  if (!value) {
    throw new Error("Account should not be empty.");
  } else if (!value.match(/^[0-9]+$/)) {
    throw new Error("Amount should contain only numbers.");
  }
};

export const isValidMessage = (value) => {
  if (!value) {
    throw new Error("Message should not be empty.");
  } else if (value.length > 100) {
    throw new Error("Message should not exceed 100 characters.");
  }
};
