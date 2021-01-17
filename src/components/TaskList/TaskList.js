import styles from './TaskList.module.css';
import Task from '../Task/Task';
import AddTask from '../../containers/AddTask/AddTask';
function TaskList({taskData}) {

    return (
        <div className={styles.TaskList}>
            <AddTask/>
            {
                Object.entries(taskData).map(([key, task]) => <Task key={key} description={task.description}/>) 
            }
        </div>
    )
}

export default TaskList
