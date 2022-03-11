import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ value, id, label, onChange, ...attrs }) => {
  return (
    <div className="input-wrapper">
      <div className="labels-wrapper">
        {
          label && (
            <label  className="input-label" htmlFor={id}>
              {label}
            </label>
          )
        }
      </div>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...attrs}
      />
    </div>

  );
};

Input.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
