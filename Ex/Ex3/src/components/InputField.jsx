const InputField = ({
  id,
  name,
  label,
  type = 'text',
  value,
  error,
  showError,
  onChange,
  onBlur,
  inputRef,
  placeholder = '',
  autoComplete,
}) => {
  const hasVisibleError = Boolean(showError && error);
  const errorId = `${id}-error`;

  return (
    <p className="form-field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={hasVisibleError ? 'field-input invalid' : 'field-input'}
        aria-invalid={hasVisibleError}
        aria-describedby={hasVisibleError ? errorId : undefined}
      />
      {hasVisibleError && (
        <span id={errorId} className="field-error" role="alert">
          {error}
        </span>
      )}
    </p>
  );
};

export default InputField;