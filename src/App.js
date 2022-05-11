import { useState } from 'react'
import Task from './Task'
import ToDoForm from './ToDoForm'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36),
        text: userInput,
        complete: false
      }
      setTasks([...tasks, newItem])
    }
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)])
  }

  const handleToggle = (id) => {
    setTasks([
      ...tasks.map((task) => 
        task.id === id ? {...task, complete: !task.complete} : {...task}
        )
    ])
  }

  return (
    <div className="App">
      <header>
        <h1 data-testid="counter">Number of Tasks: {tasks.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {tasks.map((task, index) => {
        return (
          <Task 
            number={index + 1}
            task={task}
            toggleTask={handleToggle}
            deleteTask={deleteTask}
            />
        )
      })}
    </div>
  )
}

export default App
