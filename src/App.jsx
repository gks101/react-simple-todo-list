import './App.css'
import {useState} from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [count, setCount] = useState(1);

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            addNewTask();
        }
    }

    function addNewTask() {
        const id = count;
        const title = document.querySelector("input[name='task']").value;
        const status = "Not Started"
        const obj = {
            id,
            title,
            status
        };

        setTaskList([...taskList, obj]);
        setCount(count + 1);
    }

    function removeTask(event) {
        taskList.splice(taskList.findIndex(e => e.id === Number(event.target.dataset.id)), 1);
        setTaskList([...taskList]);
    }

    return (
    <>
        <div className="main-container">
            <div className="header-band">
                <h1>TODO List</h1>
            </div>
            <div className="task-input-container container">
                <input type="text" name="task" placeholder="What would you like to do?" onKeyDown={ handleKeyDown } />
                <button className="btn btn-primary task-btn" onClick={ addNewTask }>Add</button>
            </div>
            <div className="container task-container">
                <h2>ToDo List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.map(task =>
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>{task.status}</td>
                                <td data-id={task.id} onClick={ removeTask }>Remove</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default App
