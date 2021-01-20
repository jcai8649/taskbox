import Task from '../Task/Task';
function TaskList({taskData}) {

    return (
        <div>
                {
                    Object.entries(taskData).map(([key, task]) => <Task key={key} taskId={task._id} description={task.description}/>) 
                }
        </div>
    )
}

export default TaskList
