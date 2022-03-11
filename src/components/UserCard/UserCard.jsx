import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.scss';
import Avatar from '../Avatar/Avatar';

const UserCard = ({ user: { avatar, first_name }, onClick }) => {
  return (
    // <>
    // loading ? (
    //       <Preloader/>
    //     ) : (
    <div className="user_card" onClick={onClick}>
      <Avatar avatar={avatar} type="round"/>
      <div className="user_card-first_name">
        {first_name}
      </div>
    </div>
        // );
    // </>
  );
};

UserCard.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
};

export default UserCard;
