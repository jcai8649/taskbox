import {React, useState} from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { Button, Input } from '@material-ui/core';

export default function Login() {

    const [login, setLogin] = useState(false)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })


    const submitHandler = (e) => {
        e.preventDefault();
        postUserHandler();
        resetLoginDataHandler();
    }

    const postUserHandler = () => {

        axios.post('https://cai-task-manager.herokuapp.com/users/login', loginData)
        .then(response => {
            setLogin({isLogin: true})
            console.log(`Welcome, ${response.data.user.name}`)
        });
    }

    const resetLoginDataHandler = () => {
        setLoginData({email: '', password: ''})
    }
    
    return (
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
    )
}





