import React from 'react'
import styles from './TaskList.module.css';
import Task from '../Task/Task'
import AddTaskButton from '../../containers/AddTaskButton/AddTaskButton';

function TaskList(props) {
    return (
        <div className={styles.TaskList}>
            <div className={styles.AddTaskButtonDiv}>
                <AddTaskButton/>
            </div>
            <Task/>
        </div>
    )
}

export default TaskList
