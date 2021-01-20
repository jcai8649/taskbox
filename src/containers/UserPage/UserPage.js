import React from 'react'
import TaskContainer from '../../components/TaskContainer/TaskContainer'
import styles from './UserPage.module.css'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'


const UserPage = ({taskData, username}) => {

    const state = useSelector(state => state)

    if (!state.isLogin) {
        return <Redirect to='/' />
    }


    return (
        <div className = {styles.UserPage}>
            <h1>Welcome, {state.userData.user.name}</h1>
            <TaskContainer taskData={state.taskData}/>
        </div>
    )
}

export default UserPage
