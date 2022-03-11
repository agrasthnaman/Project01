import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, onClick, disabled, ...attrs }) => {
  const onClickAction = e => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  return (
    <button
      className="btn"
      disabled={disabled}
      onClick={onClickAction}
      {...attrs}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Default',
  disabled: false,
};

export default Button;
