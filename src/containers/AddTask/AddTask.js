import {useState, React} from 'react';
import {Button, Input} from '@material-ui/core';
import styles from './AddTask.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/actions';


function AddTask() {

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
        <div>
            <form className={styles.AddTaskButtonDiv} onSubmit={submitTaskHandler}>
                <Input type='text' placeholder='Add new task...' onChange={(e) => {setTaskDes(e.target.value)}}/>
                <div className={styles.addButton}>
                    <Button variant='outlined' color="primary" type="submit">Add Task</Button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
