import { acts } from './types';
import * as R from 'ramda';

const initialState = {
  users: [],
  currentPage: null,
  numOfUsersPerPages: null,
  totalUsers: null,
  totalPages: null,
  ad: {},
  currentUser: {},
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.FETCH_USERS: {
      const {
        data, page, per_page, total, total_pages, ad,
      } = action.payload;
      return {
        ...state,
        users: data,
        currentPage: page,
        numOfUsersPerPages: per_page,
        totalUsers: total,
        totalPages: total_pages,
        ad,
      };
    }
    case acts.FETCH_USER: {
      const { data } = action.payload;
      return {
        ...state,
        currentUser: data,
      };
    }
    case acts.SET_SELECTED_PAGE: {
      const { data, page } = action.payload;
      return {
        ...state,
        users: data,
        currentPage: page,
      };
    }
    case acts.ADD_USER: {
      const { id, name, job, createdAt } = action.payload;
      return {
        ...state,
        users: [
          ...state.users,
          {
            id,
            first_name: name,
            job,
            createdAt,
          },
        ],
      };
    }
    case acts.UPDATE_USER: {
      const { name, job, updatedAt } = action.payload;
      const updatedUsers = R.map(
        user => {
          if (user.id === action.userId) {
            return {
              ...user,
              first_name: name,
              job,
              updatedAt,
            };
          }
          return user;
        },
        state.users,
        );
      return {
        ...state,
        users: updatedUsers,
      };
    }
    case acts.REMOVE_USER: {
      const filteredUsers = R.filter(
        user => user.id !== action.userId,
        state.users,
      );
      return {
        ...state,
        users: filteredUsers,
      };
    }
    default: return state;
  }
};
