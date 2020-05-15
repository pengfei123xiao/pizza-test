import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form__input"
        onChange={handleChange}
        {...otherProps} />
      {/* review carefully here */}
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
            } form__input-label`}
        >
          {label.toUpperCase()}
        </label>
      ) : null}
    </div>
  )
}

export default FormInput;