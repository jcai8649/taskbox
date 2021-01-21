import axios from 'axios';
import * as actions from './actionTypes';

const fetchTask = async (token) => {
        const taskResponse = await axios.get(`https://cai-task-manager.herokuapp.com/tasks?sortBy=createdAt:desc` , {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          return taskResponse
}


export const login = (email, password) => {

    return async (dispatch, getState) => {
        dispatch({type: actions.LOGIN_REQUEST});
        try {
            const userResponse = await axios.post('https://cai-task-manager.herokuapp.com/users/login', {email: email, password: password})
            const taskResponse = await fetchTask(userResponse.data.token)
              dispatch({
                  type: actions.LOGIN_SUCCESS,
                  userPayload: userResponse.data,
                  taskPayload: taskResponse.data
              })
        } catch(error) {
            dispatch({
                type: actions.LOGIN_FAIL, 
                error: "Invalid email or password"
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

            const newTaskDataRes = await fetchTask(token)

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


export const deleteTask = (id, token) => {
    
    return async (dispatch, getState) => {
        dispatch({type: actions.DELETE_TASK_REQUEST})
        try {
            await axios.delete(`https://cai-task-manager.herokuapp.com/tasks/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            )
            
            const newTaskDataRes = await fetchTask(token)
            
            dispatch({
                type: actions.DELETE_TASK_SUCCESS,
                newTaskDataPayload: newTaskDataRes.data
            })
            
        } catch (error) {
            dispatch ({
                type: actions.DELETE_TASK_FAIL,
                error
            })
        }
    }
}

export const signUp = (name, email, password) => {
    
    return async (dispatch, getState) => {
        dispatch({type: actions.SIGNUP_REQUEST});
        try {
            const userResponse = await axios.post('https://cai-task-manager.herokuapp.com/users', {name: name, email: email, password: password})
            const taskResponse = await fetchTask(userResponse.data.token)
              dispatch({
                  type: actions.SIGNUP_SUCCESS,
                  userPayload: userResponse.data,
                  taskPayload: taskResponse.data
              })
        } catch(error) {
            dispatch({
                type: actions.SIGNUP_FAIL, 
                error: 'Email already taken'
            })
        }
    }
}

export const logout = () => {
    return {type: actions.LOGOUT}
}