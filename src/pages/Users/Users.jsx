import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import './Users.scss';
import {
  fetchUsers as fetchUsersAction,
  fetchUser as fetchUserAction,
  setSelectedPage as setSelectedPageAction,
  addUser as addUserAction,
  updateUser as updateUserAction,
  removeUser as removeUserAction,
} from '../../redux/actions';
import UserCard from '../../components/UserCard/UserCard';
import Pagination from '../../components/Pagination/Pagination';
import AddUserButton from '../../components/AddUserButton/AddUserButton';
import Modal from '../../components/Modal/Modal';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';
import Preloader from '../../components/Preloader/Preloader';

const Users = ({
  users,
  currentUser,
  currentPage,
  totalPages,
  fetchUsers,
  fetchUser,
  setSelectedPage,
  addUser,
  updateUser,
  removeUser,
  loading,
  loadingUserProfile,
}) => {

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const pageChange = (page) => {
    if (currentPage === page) return;
    setSelectedPage(page);
  };

  const getPagesList = (totalNumOfPages) => R.range(1, totalNumOfPages + 1);

  const onUserCardClick = (id) => {
    setIsOpenModal(true);
    fetchUser(id);
  };

  const onModalClose = () => {
    setIsOpenModal(false);
  };

  const addNewUser = (name, job) => {
    if (!loading) {
      addUser(name, job);
    }
  };

  const onUpdateUser = (id, name, job = 'none') => {
    if (name !== currentUser.first_name){
      updateUser(id, name, job);
    }
    onModalClose();
  };

  const onDeleteUser = (id) => {
    removeUser(id);
    onModalClose();
  };

  return (
    <div>
      {
        loading ? (
          <Preloader/>
        ) : (
        <>
      <div className="modal_container">
        <Modal
          isOpen={isOpenModal}
          onClose={onModalClose}
        >
          <UserProfileCard
            user={currentUser}
            loading={loadingUserProfile}
            onDelete={onDeleteUser}
            onUpdate={onUpdateUser}
          />
        </Modal>
      </div>
      <div className="usersCards_container">
        {
          loading ? <Preloader /> : (
            <>
              {
                R.map(
                  user => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onClick={() => onUserCardClick(user.id)}
                    />
                  ),
                  users,
                )
              }
            </>
          )
        }
      </div>
      <AddUserButton
        onClick={() => addNewUser('Artur', 'king')}
      />
      <Pagination
      page={currentPage}
      pagesList={getPagesList(totalPages)}
      onPageChange={pageChange}
      />
      </>
      )
      }
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  currentUser: PropTypes.object,
  fetchUsers: PropTypes.func,
  fetchUser: PropTypes.func,
  setSelectedPage: PropTypes.func,
  addUser: PropTypes.func,
  updateUser: PropTypes.func,
  removeUser: PropTypes.func,
  loading: PropTypes.bool,
  loadingUserProfile: PropTypes.bool,
};

Users.defaultProps = {
  currentPage: 1,
  loading: false,
  loadingUserProfile: false,
};

const mapStateToProps = state => ({
  users: state.usersStore.users,
  currentPage: state.usersStore.currentPage,
  totalPages: state.usersStore.totalPages,
  currentUser: state.usersStore.currentUser,
  loading: state.app.loading,
  loadingUserProfile: state.app.loadingUserProfile,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersAction()),
  fetchUser: (id) => dispatch(fetchUserAction(id)),
  setSelectedPage: (page) => dispatch(setSelectedPageAction(page)),
  addUser: (name, job) => dispatch(addUserAction(name, job)),
  updateUser: (id, name, job) => dispatch(updateUserAction(id, name, job)),
  removeUser: (id) => dispatch(removeUserAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
