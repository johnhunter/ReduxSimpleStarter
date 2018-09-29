import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    label,
    input,
    meta: { touched, error }
  } = props;
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

InputField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  }),
  label: PropTypes.string.isRequired
};

export default InputField;
