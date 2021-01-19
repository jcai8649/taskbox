import {useSelector} from 'react-redux'
import styles from './TaskList.module.css';
import Task from '../Task/Task';
import AddTask from '../../containers/AddTask/AddTask';
import CircularProgress from '@material-ui/core';
function TaskList({taskData}) {

    const state = useSelector(state => state.state)

    return (
        <div className={styles.TaskList}>
                <AddTask/>
                {
                    Object.entries(taskData).map(([key, task]) => <Task key={key} taskId={task._id} description={task.description}/>) 
                }
        </div>
    )
}

export default TaskList
