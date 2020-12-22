import React from 'react'
import styles from './Task.module.css'

function Task() {
    return (
        <ul className={styles.Task}>
            <li>Go Shopping</li>
            <li>Workout</li>
            <li>Eat cheesecake</li>
        </ul>
    )
}

export default Task
