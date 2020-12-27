import * as actions from './actionTypes';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                userData: {
                    username: action.payload.username,
                    password: action.payload.password
                }
            };

        case actions.REMOVE_USER:
            return {
                ...state,
                userData: {}
            };
        default:
            return state;
    }
}