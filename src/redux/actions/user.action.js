import * as types from '../actions/actionTypes';
import { NavigationActions } from 'react-navigation';

// // this action is just Javascript object.
// const regularAction = {
// 	type: 'START_LOGGING'
// }

// // this action is a function. We cannot dispatch a function
// // unless we add the redux-thunk middleware
// const specialThunkAction = dispatch => {
// 	dispatch({ type: 'DO_SOMETHING_SPECIAL' })
// }

export function fetchUserSuccess(user) {
    return {
        type: types.FINISH_LOGGING,
        user
    };
}

export const logIn = () => async (dispatch) => {
	// dispatch an action to saying I started to login
	dispatch({ type: 'START_LOGGING' })
	const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('174090366608996', {
		permissions: ['public_profile'],
	});
	if (type === 'success') {
		// Get the user's name using Facebook's Graph API
		const response = await fetch(
			`https://graph.facebook.com/me?access_token=${token}`);
		
		const name = (await response.json()).name;
		// dispatch an action to saying I finished login
		dispatch({ type: 'FINISH_LOGGING', name})
	} else {
        dispatch(NavigationActions.navigate({ routeName: 'Map'}));
    }
}