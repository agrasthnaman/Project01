import React from 'react';
import PropTypes from 'prop-types';
import './AddUserButton.scss';

const AddUserButton = ({ onClick }) => (
  <div className="addUser_button-container">
    <div
      role="button"
      tabIndex="0"
      onClick={onClick}
      className="addUser_button"
    >
      <span className="addUser_button-icon" />
    </div>
  </div>
);

AddUserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddUserButton;
