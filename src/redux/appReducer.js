import { acts } from './types';

const initialState = {
  loading: false,
  loadingUserProfile: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case acts.START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case acts.END_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }
    case acts.START_LOADING_USER_PROFILE: {
      return {
        ...state,
        loadingUserProfile: true,
      };
    }
    case acts.END_LOADING_USER_PROFILE: {
      return {
        ...state,
        loadingUserProfile: false,
      };
    }
    default: return state;
  }
};
