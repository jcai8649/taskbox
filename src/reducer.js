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
                    ...action.payload.user
                }
            };

        case actions.LOGOUT:
            return {
                ...state,
                userData: null
            };
        default:
            return state;
    }
}