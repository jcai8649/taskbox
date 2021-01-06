import {React, useState} from 'react';
import { Button, Input, CircularProgress } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Signup.module.css'

function Signup() {

    const dispatch = useDispatch();
    const state = useSelector(state => state)

    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: 0
    })
    
    
    const submitSignupHandler = (e) => {
        e.preventDefault();
        postSignUpHandler();
        resetSignUpDataHandler();
    }
    
    const resetSignUpDataHandler = () => {
        setSignUpData({email: '', password: ''})
    }
    
    const postSignUpHandler = () => {
        dispatch()
    }

    return (
        <div>
            <div className={styles.registerForm}>
                    <h1>Sign Up</h1>
                    <form onSubmit={submitSignupHandler}>
                        <div>
                            <Input type='text' name='name'  value={signUpData.name} onChange={ e => {setSignUpData({...signUpData, name: e.target.value})}}placeholder='Name'></Input>
                        </div>
                        <div>
                            <Input type='text' name='email'  value={signUpData.email} onChange={ e => {setSignUpData({...signUpData, email: e.target.value})}}placeholder='Email'></Input>
                        </div>
                        <div>
                            <Input type='password' value={signUpData.password} onChange={ e => setSignUpData({...signUpData, password: e.target.value})} name='pass' placeholder='Password'></Input>
                        </div>
                        <div>
                            <Input type='confirmPassword' value={signUpData.confirmPassword} onChange={e => setSignUpData({...signUpData, confirmPassword: e.target.value})}name='confirmPass' placeholder='Confirm Password'></Input>
                        </div>
                        <div>
                            <Button type="submit">Register</Button>
                        </div>
                        {/* <div>{error}</div> */}
                    </form>
                </div>
        </div>
    )
}

export default Signup  