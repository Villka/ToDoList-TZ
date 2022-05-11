const Task = ({ number, task, toggleTask, deleteTask }) => {
    return (
        <div data-testid="task" id={task.id} className="item-todo">
            <div
                data-testid="complete"
                className={task.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(task.id)}
            >
                {number}. {task.text}
            </div>
            <div data-testid={`del ${number}`} className="item-delete" onClick={() => deleteTask(task.id)}>
                X
            </div>
        </div>
    )
}

export default Task