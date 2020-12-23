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

    const [userData, setUserData] = useState({
        isLoading: false
    })

    const submitHandler = (e) => {
        e.preventDefault();
        postUserHandler();
        resetLoginDataHandler();
    }
 
    const postUserHandler = () => {
        setUserData({isLoading: true})
        axios.post('https://cai-task-manager.herokuapp.com/users/login', loginData)
        .then(response => {
            const user = response.data.user
            setLogin(true)
            setUserData({isLoading: false, ...user})
        }).catch((error) => {
            console.log(error)
        })



    }

    const getTaskHandler = () => {
        axios.get('https://cai-task-manager.herokuapp.com/tasks?owner=' + '5fcebb0bf2494d00178f03ea')
        .then(response => console.log(response))
        .catch((error) => {
            console.log(error)
        });
    }

    const resetLoginDataHandler = () => {
        setLoginData({email: '', password: ''})
    }
    
    return (
        <>
        {
            userData.isLoading ? (
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
                    <UserPage/>
                </div>
            )
        }
        </>
    );
}





