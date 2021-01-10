import axios from 'axios';
import * as actions from './actionTypes';

export const login = (username, password) => {

    return async (dispatch, getState) => {
        dispatch({type: actions.LOGIN_REQUEST});
        try {
            const userResponse = await axios.post('https://cai-task-manager.herokuapp.com/users/login', {email: username, password: password})
            const taskResponse = await axios.get(`https://cai-task-manager.herokuapp.com/tasks` , {
                headers: {
                  'Authorization': `Bearer ${userResponse.data.token}`
                }
              })
              dispatch({
                  type: actions.LOGIN_SUCCESS,
                  userPayload: userResponse.data,
                  taskPayload: taskResponse.data
              })
        } catch(error) {
            dispatch({
                type: actions.LOGIN_FAIL, 
                error
            })
        }
    }
}

export const logout = () => {
    return {type: actions.LOGOUT}
}