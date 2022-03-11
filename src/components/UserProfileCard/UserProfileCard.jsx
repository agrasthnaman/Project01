import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserProfileCard.scss';
import Avatar from '../Avatar/Avatar';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Preloader from '../Preloader/Preloader';

const UserProfileCard = ({
  user: { email, first_name, last_name, avatar, id },
  onDelete,
  onUpdate,
  loading,
}) => {
  const [userMail, setUserMail] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  const handleFirstNameChange = (value) => {
    setUserFirstName(value);
  };

  const handleLastNameChange = (value) => {
    setUserLastName(value);
  };

  const handleEmailChange = (value) => {
    setUserMail(value);
  };

  return (
    <div className="user_profileCard">
      {
        loading ? (
          <Preloader/>
        ) : (
          <>
            <Avatar avatar={avatar} type="squared"/>
            <div className="user_profileCard-attrs">
              <Input
                value={userFirstName || first_name}
                id="first_name"
                label="First Name"
                onChange={handleFirstNameChange}
              />
              <Input
                value={userLastName || last_name}
                id="last_name"
                label="Last Name"
                onChange={handleLastNameChange}
              />
              <Input
                value={userMail || email}
                id="email"
                label="Email"
                onChange={handleEmailChange}
              />
            </div>
          </>
        )
      }
      <div className="user_profileCard_panelBtns">
        <Button onClick={() => onDelete(id)}>Remove</Button>
        <Button
          onClick={() => onUpdate(id, userFirstName || first_name)}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

UserProfileCard.propTypes = {
  user: PropTypes.object,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  loading: PropTypes.bool,
};

export default UserProfileCard;
