import axios from 'axios';
import {useSelector} from 'react-redux';
import * as actions from './actionTypes';

export const login = (username, password) => {

    return async (dispatch, getState) => {
        dispatch({type: actions.LOGIN_REQUEST});
        try {
            const userResponse = await axios.post('https://cai-task-manager.herokuapp.com/users/login', {email: username, password: password})
            const taskResponse = await axios.get(`https://cai-task-manager.herokuapp.com/tasks?sortBy=createdAt:desc` , {
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

export const addTask = (task, token) => {
    
    return async (dispatch, getState) => {
        dispatch({type: actions.ADD_TASK_REQUEST})
        try {
            await axios.post('https://cai-task-manager.herokuapp.com/tasks', {'description': task, "completed": false}, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            )

            const newTaskDataRes = await axios.get('https://cai-task-manager.herokuapp.com/tasks?sortBy=createdAt:desc',  {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }
            )

            console.log(newTaskDataRes)
            dispatch({
                type: actions.ADD_TASK_SUCCESS,
                newTaskDataPayload: newTaskDataRes.data
            })

        } catch (error) {
            dispatch ({
                type: actions.ADD_TASK_FAIL,
                error
            })
        }
    }
}

export const logout = () => {
    return {type: actions.LOGOUT}
}