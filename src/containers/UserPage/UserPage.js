import React from 'react'
import TaskList from '../../components/TaskList/TaskList'
import styles from './UserPage.module.css'


const UserPage = ({taskData, username}) => {
    return (
        <div className = {styles.UserPage}>
            <h1>Welcome, {username}</h1>
            <TaskList taskData={taskData}/>
        </div>
    )
}

export default UserPage
