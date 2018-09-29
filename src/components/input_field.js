import React from 'react';

const InputField = (field) => {
  const {
    label,
    input,
    meta: { touched, error }
  } = field;
  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
      <label htmlFor={input.name}>{label}</label>
      <input
        id={input.name}
        className="form-control"
        type="text"
        {...input}
      />
      {
        touched && error &&
        <span className="text-help">{error}</span>
      }
    </div>
  );
}

export default InputField;
