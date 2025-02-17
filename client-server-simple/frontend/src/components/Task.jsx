import React, { useState } from "react";
import TaskView from "./TaskView";
import TaskForm from "./TaskForm";

const Task = ({
    selectedTask,
    setSelectedTask
}) => {
    const [isEdit, setIsEdit] = useState(false)
    const isNewTask = selectedTask._id == null

    const cancel = () => isNewTask ? setSelectedTask(null) : setIsEdit(!isEdit)
    
    return (
        <div className="tt-task-container">
            {(isEdit || isNewTask)
                ? <TaskForm 
                        id={selectedTask._id}
                        name={selectedTask.name}
                        description={selectedTask.description}
                        details={selectedTask.details}
                        cancel={() => setSelectedTask(null)}
                    />
                :  <TaskView 
                        id={selectedTask._id}
                        name={selectedTask.name}
                        description={selectedTask.description}
                        details={selectedTask.details}
                        date={selectedTask.date}
                        edit={() => setIsEdit(true)}
                        cancel={cancel}
                    />
            
        }
        </div>
    )
}

export default Task