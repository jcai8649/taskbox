import React from 'react';
import axios from 'axios';
import styles from './Login.module.css';

export default function Login() {

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
            console.log(response.data)
        });
    }

    return (
        <div className={styles.Auth}>
            <h1>Login In</h1>
            <form onSubmit={submitHandler}>
                <input type='text' name='email' placeholder='email'></input>
                <input type='password' name='pass' placeholder='password'></input>
                <button>Login</button>
            </form>
        </div>
    )
}
