import {React, useState} from 'react';
import { Button, Input, CircularProgress } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Signup.module.css';
import UserPage from '../../containers/UserPage/UserPage';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/actions';

function Signup() {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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
                                    <Input type='text' name='name'  value={signUpData.name} onChange={ e => {setSignUpData({...signUpData, name: e.target.value})}} placeholder='Name'></Input>
                                </div>
                                <div>
                                    <Input type='text' name='email'  value={signUpData.email} onChange={ e => {setSignUpData({...signUpData, email: e.target.value})}} placeholder='Email'></Input>
                                </div>
                                <div>
                                    <Input type='password' value={signUpData.password} onChange={ e => setSignUpData({...signUpData, password: e.target.value})} name='pass' placeholder='Password'></Input>
                                </div>
                                <div>
                                    <Input type='password' value={signUpData.confirmPassword} onChange={e => setSignUpData({...signUpData, confirmPassword: e.target.value})} name='confirmPass' placeholder='Confirm Password'></Input>
                                </div>
                                <div>
                                    <Button type="submit">Register</Button>
                                </div>
                                {/* <div>{error}</div> */}
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