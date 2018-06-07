import * as types from '../actions/actionTypes';
import { NavigationActions } from 'react-navigation';

export const gotoDetailScreenAction = () => async (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: 'MapDetail' }))
}