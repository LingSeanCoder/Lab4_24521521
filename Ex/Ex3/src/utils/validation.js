const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HAS_LETTER_REGEX = /[A-Za-z]/;
const HAS_NUMBER_REGEX = /\d/;

export const INITIAL_VALUES = Object.freeze({
  fullName: '',
  email: '',
  age: '',
  password: '',
});

export const validateField = (name, value) => {
  const rawValue = typeof value === 'string' ? value : String(value ?? '');
  const trimmed = rawValue.trim();

  switch (name) {
    case 'fullName': {
      if (!trimmed) {
        return 'Full name is required.';
      }
      if (trimmed.length < 2) {
        return 'Full name must be at least 2 characters.';
      }
      return '';
    }

    case 'email': {
      if (!trimmed) {
        return 'Email is required.';
      }
      if (!EMAIL_REGEX.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }

    case 'age': {
      if (!trimmed) {
        return 'Age is required.';
      }
      const parsedAge = Number(trimmed);
      if (!Number.isInteger(parsedAge) || parsedAge < 16 || parsedAge > 100) {
        return 'Age must be an integer between 16 and 100.';
      }
      return '';
    }

    case 'password': {
      if (!rawValue) {
        return 'Password is required.';
      }
      if (rawValue.length < 8) {
        return 'Password must be at least 8 characters.';
      }
      if (!HAS_LETTER_REGEX.test(rawValue) || !HAS_NUMBER_REGEX.test(rawValue)) {
        return 'Password must contain at least 1 letter and 1 number.';
      }
      return '';
    }

    default:
      return '';
  }
};

export const validateForm = (values) => {
  return Object.keys(INITIAL_VALUES).reduce((errors, key) => {
    return {
      ...errors,
      [key]: validateField(key, values[key]),
    };
  }, {});
};

export const isFormValid = (errors) => {
  return Object.values(errors).every((msg) => msg === '');
};