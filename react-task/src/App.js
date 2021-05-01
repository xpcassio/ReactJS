import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask.js'
import About from './components/About.js'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        
        getTasks()
    }, [])

    // Fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data;
    }

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data;
    }

    // Add
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])    

        // const id = Math.floor(Math.random() * 10000) +1
        // const newTask = {id, ...task}
        // setTasks([...tasks, newTask])
    }

    // Delete
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? {...task, reminder:data.reminder} : task))
    }

    return (<Router>
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <div className="card">
                        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

                        <Route path='/' exact render={(props) => (
                        <>
                            {showAddTask && <AddTask onAdd={addTask} />}
                            <ul className="list-group list-group-flush">
                                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                            </ul>
                            <Footer />
                        </>
                        )} />

                        <Route path='/about' component={About} />
                    </div>
                </div>
            </div>
        </div>
    </Router>);
}

export default App;
