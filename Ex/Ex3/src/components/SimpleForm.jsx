import { useState, useRef } from 'react';
import InputField from './InputField';
import {
  INITIAL_VALUES,
  validateForm,
  isFormValid,
} from '../utils/validation';

const INITIAL_TOUCHED = Object.freeze({
  fullName: false,
  email: false,
  age: false,
  password: false,
});

const FIELD_ORDER = Object.freeze(['fullName', 'email', 'age', 'password']);

const SimpleForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const fieldRefs = useRef({});

  const errors = validateForm(values);
  const isValid = isFormValid(errors);

  const registerFieldRef = (name) => (el) => {
    fieldRefs.current[name] = el;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSubmitMessage('');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (!isValid) {
      const firstErrorField = FIELD_ORDER.find((field) => errors[field] !== '');
      const targetElement = firstErrorField
        ? fieldRefs.current[firstErrorField]
        : null;

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.focus();
      }
      return;
    }

    setSubmitMessage(
      `Registration successful for ${values.fullName.trim()} (${values.email.trim()}).`
    );
  };

  const handleReset = () => {
    setValues(INITIAL_VALUES);
    setTouched(INITIAL_TOUCHED);
    setHasSubmitted(false);
    setSubmitMessage('');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="simple-form">
      <fieldset>
        <legend>Account Registration</legend>

        <InputField
          id="fullName"
          name="fullName"
          label="Full Name"
          type="text"
          value={values.fullName}
          error={errors.fullName}
          showError={touched.fullName || hasSubmitted}
          onChange={handleChange}
          onBlur={handleBlur}
          inputRef={registerFieldRef('fullName')}
          placeholder="Elena Vance"
          autoComplete="name"
        />

        <InputField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={values.email}
          error={errors.email}
          showError={touched.email || hasSubmitted}
          onChange={handleChange}
          onBlur={handleBlur}
          inputRef={registerFieldRef('email')}
          placeholder="elena.vance@example.com"
          autoComplete="email"
        />

        <InputField
          id="age"
          name="age"
          label="Age"
          type="number"
          value={values.age}
          error={errors.age}
          showError={touched.age || hasSubmitted}
          onChange={handleChange}
          onBlur={handleBlur}
          inputRef={registerFieldRef('age')}
          placeholder="24"
          autoComplete="off"
        />

        <InputField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          error={errors.password}
          showError={touched.password || hasSubmitted}
          onChange={handleChange}
          onBlur={handleBlur}
          inputRef={registerFieldRef('password')}
          placeholder="At least 8 chars, 1 letter & 1 number"
          autoComplete="new-password"
        />
      </fieldset>

      <menu className="form-actions">
        <button type="submit" className="btn-primary">
          Register
        </button>
        <button type="button" onClick={handleReset} className="btn-secondary">
          Reset
        </button>
      </menu>

      <output className="form-status" aria-live="polite">
        {submitMessage}
      </output>
    </form>
  );
};

export default SimpleForm;