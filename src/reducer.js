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
        case actions.LOGIN_REQUEST: 
            return {
                ...state,
                loading: true,
                error: null,
                isLogin: false
            }

        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                userData: {
                    ...action.userPayload
                },
                taskData: {
                    ...action.taskPayload
                },
                loading: false,
                error: null,
                isLogin: true          
            };
        
        case actions.LOGIN_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.error,
                isLogin: false
            }

        case actions.LOGOUT:
            return {
                ...state,
                userData: null,
                isLogin: false
            };
        default:
            return state;
    }
}