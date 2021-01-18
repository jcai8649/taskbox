import React from 'react'
import styles from './Task.module.css'
import DeleteTask from '../../containers/DeleteTask/DeleteTask'

function Task({description, taskId}) {
    return (
        <li>
            <div className={styles.des}>
                {description} 
            </div>
            <div className={styles.deleteButton}>
                <DeleteTask taskId={taskId}/>
            </div>
        </li>
    )
}

export default Task
