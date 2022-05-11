const Task = ({ number, task, toggleTask, removeTask }) => {
    return (
        <div id={task.id}>
            <div
                onClick={() => toggleTask(task.id)}
            >
                {number}. {task.text}
            </div>
            <div onClick={() => removeTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default Task