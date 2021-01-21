import {React, useState} from 'react';
import { Button, Input, CircularProgress } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Signup.module.css';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/actions';

function Signup() {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const [signUpData, setSignUpData] = useState({
        name: "",
        nameClicked: false,
        email: "",
        emailClicked: false,
        password: "",
        passwordClicked: false,
        confirmPassword: "",
        confirmPassClicked: false
    })
    
    
    const submitSignupHandler = (e) => {
        e.preventDefault();
        postSignUpHandler();
        resetSignUpDataHandler();
    }
    
    const resetSignUpDataHandler = () => {
        setSignUpData({name: '', email: '', password: '', confirmPassword: ''})
    }
    
    const postSignUpHandler = () => {
        dispatch(signUp(signUpData.name, signUpData.email, signUpData.password))
    }

    function emailIsValid (email) {
        return /\S+@\S+\.\S+/.test(email)
    }

    return (
        <>
        { state.loading ? (
            <div className={styles.Loader}>
                <CircularProgress/>
            </div>
        ) : (
                !state.userData ? (
                    <div className={styles.registerForm}>
                            <h1>Sign Up</h1>
                            <form onSubmit={submitSignupHandler}>
                                <div>
                                    <Input type='text' name='name' error={!signUpData.name && signUpData.nameClicked ? true: false} value={signUpData.name} onChange={ e => {setSignUpData({...signUpData, name: e.target.value, nameClicked: true})}} placeholder='Name'></Input>
                                </div>
                                <div>
                                    <Input type='text' name='email' error={!emailIsValid(signUpData.email) && signUpData.emailClicked ? true: false} value={signUpData.email}  onChange={ e => {setSignUpData({...signUpData, email: e.target.value, emailClicked: true})}} placeholder='Email'></Input>
                                </div>
                                {}
                                <div>
                                    <Input type='password' error={signUpData.password.length < 7 && signUpData.passwordClicked ? true : false} value={signUpData.password}  onChange={ e => setSignUpData({...signUpData, password: e.target.value, passwordClicked: true})} name='pass' placeholder='Password'></Input>
                                </div>
                                <div>
                                    <Input type='password' error={signUpData.password !== signUpData.confirmPassword && signUpData.confirmPassClicked ? true: false} value={signUpData.confirmPassword} onChange={e => setSignUpData({...signUpData, confirmPassword: e.target.value, confirmPassClicked: true})} name='confirmPass' placeholder='Confirm Password'></Input>
                                </div>
                                <div className={styles.passNotice}>*Password should be 7 characters or more</div>
                                <div className={styles.error}>{state.error}</div>
                                <div>
                                    <Button type="submit" disabled={
                                            !signUpData.name || !signUpData.email || !signUpData.password ||!signUpData.confirmPassword|| (signUpData.password !== signUpData.confirmPassword) || signUpData.password.length < 7 || !emailIsValid(signUpData.email) ? true : false
                                    }>Register</Button>
                                </div>
                            </form>
                        </div>
                ) : (
                    <Redirect to='/user'/>
                )
            )
        }
        </>
    )
}

export default Signup  