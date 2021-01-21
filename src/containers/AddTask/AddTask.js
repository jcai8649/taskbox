import {useState, React} from 'react';
import {Button, Input} from '@material-ui/core';
import styles from './AddTask.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {addTask} from '../../store/actions/actions';


function AddTask() {

    const state = useSelector(state => state)

    const dispatch = useDispatch()
    
    const [taskDes, setTaskDes] = useState('')

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



    return (
        <div>
            {
                <form className={styles.AddTaskButtonDiv} onSubmit={submitTaskHandler}>
                    <Input type='text' placeholder='New task...' onChange={(e) => {setTaskDes(e.target.value)}}/>
                    <div className={styles.addButton}>
                        <Button variant='outlined' color="primary" type="submit" disabled={!taskDes ? true : false}>Add Task</Button>
                    </div>
                </form>
            }
        </div>
    )
}

export default AddTask
