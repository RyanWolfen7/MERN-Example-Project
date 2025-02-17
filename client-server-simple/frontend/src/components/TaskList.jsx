import React, { useEffect, useState } from "react";

const TaskList = ({
    setSelectedTask
}) => {
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/tasks/list", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await response.json()
            if(list != data) setList(data) 
        }
        fetchData()  
    }, [list])
    

    return (
        <div className='tt-list-container'> 
            <div className="tt-list-header">
                <h1> Task List </h1>
                <button onClick={() => setSelectedTask({})}> New Task </button>
            </div> 
            { list.map(task => (
                <div 
                    key={task._id} 
                    className="tt-list-card"
                    onClick={() => setSelectedTask(task)}
                >
                    <h3> {task.name} </h3>
                    <sub> {task.date} </sub>
                    <div> { task.description } </div>
                </div>
            ))}
        </div>
    )
}

export default TaskList