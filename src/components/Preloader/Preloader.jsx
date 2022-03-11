import React from 'react';
import './Preloader.scss';
import preloader from '../../assets/preloader.svg';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
