import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, children, onClose }) => {
  return (
    <div className="modal_overlay" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal_window">
        <div className="modal_header">
          <button className="modal_closeBtn" onClick={onClose}/>
        </div>
        <div className="modal_body">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  children: null,
};

export default Modal;
