import * as types from '../actions/actionTypes';

const initialUser = {
    name: "John Doe"
}

export function user(state = initialUser, action) {
    // console.log("state: ", state);
    // console.log("action: ", action);
    switch (action.type) {
        case types.START_LOGGING:
            return state;
        case types.FINISH_LOGGING:
            return action.name;
        default:
            return state;
    }
}