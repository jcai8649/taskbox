import {React, useState} from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { Button, Input, CircularProgress } from '@material-ui/core';
import UserPage from '../UserPage/UserPage';



export default function Login() {

    const [login, setLogin] = useState(false)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false)

    const [userData, setUserData] = useState({
    })

    
    const [taskData, setTaskData] = useState(null)
    
    const submitHandler = (e) => {
        e.preventDefault();
        postUserHandler();
        resetLoginDataHandler();
    }
    
    const postUserHandler = () => {
        setIsLoading(true)
        axios.post('https://cai-task-manager.herokuapp.com/users/login', loginData)
        .then(response => {
            console.log(response)
            const user = response.data.user
            const token = response.data.token
            setLogin(true)
            setUserData({...user, token})
            return axios.get(`https://cai-task-manager.herokuapp.com/tasks` , {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
            .then(response =>  {
                setTaskData({...response.data})
                setIsLoading(false)
            })
        }).catch((error) => {
            setIsLoading(false)
            console.log(error)
        })
    }


    const resetLoginDataHandler = () => {
        setLoginData({email: '', password: ''})
    }
    
    return (
        <>
        {
            isLoading ? (
                <div className={styles.Loader}>
                    <CircularProgress color="primary" />
                </div>
            ) : !login ? (
                <div className={styles.Auth}>
                    <h1>Sign In</h1>
                    <form onSubmit={submitHandler}>
                        <div>
                            <Input type='text' name='email'  value={loginData.email} onChange={ e => {setLoginData({...loginData, email: e.target.value})}}placeholder='email'></Input>
                        </div>
                        <div>
                            <Input type='password' value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})}name='pass' placeholder='password'></Input>
                        </div>
                        <div>
                            <Button type="submit">Login</Button>
                        </div>
                        <div>
                            <Button>Sign Up</Button>
                        </div>
                    </form>
                </div>
            ) : (
                <div>
                    <UserPage taskData={taskData} username={userData.name}/>
                </div>
            )
        }
        </>
    );
}





