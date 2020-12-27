import * as actions from './actionTypes';

export function login(username, password) {
    return {
        type: actions.LOGIN,
        payload: {
            username,
            password
        }
    };
}