import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { usersReducer } from './usersReducer';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  usersStore: usersReducer,
  app: appReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
