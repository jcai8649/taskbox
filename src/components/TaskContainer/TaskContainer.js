import React from 'react'
import {useSelector} from 'react-redux';
import styles from './TaskContainer.module.css';
import AddTask from '../../containers/AddTask/AddTask';
import TaskList from '../../components/TaskList/TaskList';
import { CircularProgress } from '@material-ui/core';

function TaskContainer() {

    const state = useSelector(state => state)

    return (
        <div className={styles.TaskContainer}>
            {
                state.loading ? (
                    <div>
                        <CircularProgress/>
                    </div>
                ) : (
                    <>
                        <AddTask/>
                        <TaskList taskData={state.taskData}/>
                    </>
                )
            }
        </div>
    )
}

export default TaskContainer
