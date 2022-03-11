import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';
import defaultAvatar from '../../assets/defaultAvatar.png';

const Avatar = ({ avatar, type }) => {
  return (
    <div className={`avatarContainer ${type}`}>
      <img
        className={`avatar ${type}`}
        src={avatar ? avatar : defaultAvatar}
        alt="avatar"
      />
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string,
  type: PropTypes.string,
};

export default Avatar;
