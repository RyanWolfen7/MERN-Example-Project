import React, { useState } from "react";
import '../styles/TaskTracker.css'
import Task from "../components/Task";
import TaskList from "../components/TaskList";

const TaskTracker = () => {
    const [selectedTask, setSelectedTask] = useState(null)
    
    return (
        <div className="tt-tracker">
            <div className="tt-container">
                <TaskList setSelectedTask={setSelectedTask} />
               { selectedTask && 
                    <Task selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
                }
            </div>
        </div>
    )
}

export default TaskTracker