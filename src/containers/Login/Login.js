import {React, useState} from 'react';
import axios from 'axios';
import styles from './Login.module.css';
import { Button, Input } from '@material-ui/core';

export default function Login() {

    const [loginInfo, setLogin] = useState({
        isLogin: false,
    })

    const submitHandler = (e) => {
        e.preventDefault();
        postUserHandler();
    }

    const postUserHandler = () => {
        const loginData = {
            email: "Mel111@gmail.com",
            password: "140378megA"
        }

        axios.post('https://cai-task-manager.herokuapp.com/users/login', loginData)
        .then(response => {
            setLogin({isLogin: true})
            console.log(`Is login! ${loginInfo.isLogin}`)
        });
    }

    return (
        <div className={styles.Auth}>
            <h1>Sign In</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <Input type='text' name='email' placeholder='email'></Input>
                </div>
                <div>
                    <Input type='password' name='pass' placeholder='password'></Input>
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





