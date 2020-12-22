import React from 'react'
import TaskList from '../../components/TaskList/TaskList'
import styles from './UserPage.module.css'


const UserPage = () => {
    return (
        <div className = {styles.UserPage}>
            <h1>Welcome, Username</h1>
            <TaskList/>
        </div>
    )
}

export default UserPage
