import Axios from 'axios';
import * as actions from './actionTypes';

export const login = (username, password) => {

    return async (dispatch, getState) => {
        const response = await Axios.post('https://cai-task-manager.herokuapp.com/users/login', {email: username, password: password})

        console.log(response)
        dispatch({
            type: actions.LOGIN,
            payload: response.data
        })
    }
}