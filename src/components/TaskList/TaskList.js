import {useState, React, useEffect} from 'react';
import styles from './TaskList.module.css';
import Task from '../Task/Task';
import {useSelector, useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/actions';
import {Button, Input} from '@material-ui/core';
function TaskList() {

    const state = useSelector(state => state)

    const dispatch = useDispatch()

    const submitTaskHandler = (e) => {
        e.preventDefault();
        dispatchTask();
        resetInput();
    }

    const dispatchTask = () => {
        dispatch(addTask(taskDes, state.userData.token))
    }

    const resetInput = () => {
        setTaskDes('')
    }

    const [taskDes, setTaskDes] = useState('')

    return (
        <div className={styles.TaskList}>
            <form className={styles.AddTaskButtonDiv} onSubmit={submitTaskHandler}>
                <Input type='text' placeholder='Add new task...' onChange={(e) => {setTaskDes(e.target.value)}}/>
                <div className={styles.addButton}>
                    <Button variant='outlined' color="primary" type="submit">Add Task</Button>
                </div>
            </form>

            {
                Object.entries(state.taskData).map(([key, task]) => <Task key={key} description={task.description}/>) 
            }
        </div>
    )
}

export default TaskList
