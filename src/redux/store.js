import { createStore, applyMiddleware } from "redux";
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducer from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root', // store all the navigation, not a subset
  state => state.nav
);

const loggerMiddleware = createLogger();

const middleware = applyMiddleware(
  navigationMiddleware,
  loggerMiddleware,
  thunk
);

export default createStore(reducer,  middleware);