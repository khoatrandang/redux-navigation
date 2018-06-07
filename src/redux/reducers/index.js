import { combineReducers }  from "redux";
import { user } from './user.reducer';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { AppNavigator } from '../../navigators/AppNavigator';

const navReducer = createNavigationReducer(AppNavigator);

let reducers =  combineReducers({
    nav: navReducer,
    user,
})

export default reducers;
