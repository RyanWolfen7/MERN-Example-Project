import React, { useEffect } from "react";

const TaskView = ({
    id,
    name,
    description,
    details,
    date,
    edit,
    cancel
}) => {
   
    const deleteTask = async event => {
        event.preventDefault()
        console.log('here', id)
        const response = await fetch(`http://localhost:8000/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        close()
    }

    return (
        <>
            <div>
                <h2> Task Title: {name} </h2>
                <sub> {date} </sub>
            </div>
            <h3> Descriptions: {description} </h3>
            <div>
                <h3> Details: </h3>
                <p> {details} </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "1rem"}}>
                <button onClick={cancel}> Return </button>
                <button onClick={edit}> Edit </button>
                <button onClick={deleteTask}> Delete </button>
            </div>
        </>
    )
}


export default TaskView