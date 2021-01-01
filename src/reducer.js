import * as actions from './actionTypes';

const intState = {
    isLogin: false,
    userData: null,
    taskData: null,
    loading: false,
    error: null
}


export default function reducer(state = intState, action) {
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