import { acts } from './types';
import axios from 'axios';

export const fetchUsers = () => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING });
    try {
      const response = await axios.get('https://reqres.in/api/users');
      dispatch({ type: acts.FETCH_USERS, payload: response.data });
      dispatch({ type: acts.END_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING });
    }
  };
};

export const fetchUser = (id) => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING_USER_PROFILE });
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch({ type: acts.FETCH_USER, payload: response.data });
      dispatch({ type: acts.END_LOADING_USER_PROFILE });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING_USER_PROFILE });
    }
  };
};

export const setSelectedPage = (page) => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING });
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      dispatch({ type: acts.SET_SELECTED_PAGE, payload: response.data });
      dispatch({ type: acts.END_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING });
    }
  };
};

export const addUser = (name, job) => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING });
    try {
      const response = await axios.post(
        'https://reqres.in/api/users',
        {
          name,
          job,
        },
      );
      dispatch({ type: acts.ADD_USER, payload: response.data });
      dispatch({ type: acts.END_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING });
    }
  };
};

export const updateUser = (id, name, job) => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING });
    try {
      const response = await axios.put(
        `https://reqres.in/api/users/${id}`,
        {
          name,
          job,
        },
      );
      dispatch({ type: acts.UPDATE_USER, payload: response.data, userId: id });
      dispatch({ type: acts.END_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING });
    }
  };
};

export const removeUser = (id) => {
  return async dispatch => {
    dispatch({ type: acts.START_LOADING });
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      dispatch({ type: acts.REMOVE_USER, userId: id });
      dispatch({ type: acts.END_LOADING });
    } catch (e) {
      console.log(e);
      dispatch({ type: acts.END_LOADING });
    }
  };
};
