import { useState } from "react"

const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                data-testid="input"
                value={userInput}
                type="text"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Enter the text..."
            />
            <button data-testid="add">Add Task</button>
        </form>
    )
}

export default ToDoForm