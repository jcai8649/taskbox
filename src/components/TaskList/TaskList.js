import React from 'react'
import styles from './TaskList.module.css';
import Task from '../Task/Task'
import AddTaskButton from '../../containers/AddTaskButton/AddTaskButton';

function TaskList({taskData}) {
    console.log(taskData)
    return (
        <div className={styles.TaskList}>
            <div className={styles.AddTaskButtonDiv}>
                <AddTaskButton/>
            </div>
            {
                Object.entries(taskData).map(([key, task]) => <Task key={key} description={task.description}/>) 
            }
        </div>
    )
}

export default TaskList
