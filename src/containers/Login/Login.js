import {React, useState} from 'react';
import styles from './Login.module.css';
import { Button, Input, CircularProgress } from '@material-ui/core';
import UserPage from '../UserPage/UserPage';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/actions/actions';
import {Redirect} from 'react-router-dom';

export default function Login() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    
    const submitHandler = (e) => {
        e.preventDefault();
        postUserHandler();
        resetLoginDataHandler();
    }

    const resetLoginDataHandler = () => {
        setLoginData({email: '', password: ''})
    }
    
    const postUserHandler = () => {
        dispatch(login(loginData.email, loginData.password))
    }

    
    return (
        <>
        {
            state.loading ? (
                <div className={styles.Loader}>
                    <CircularProgress color="primary" />
                </div>
            ) : !state.isLogin ? (
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
                            <Button type="submit" disabled={!loginData.email || !loginData.password ? true : false}>Login</Button>
                        </div>
                        <div className={styles.error}>{state.error ? state.error : ''}</div>
                    </form>
                </div>
            ) : (
                <Redirect to='/user'/>
            )
        }
        </>
    );
}

