import React, { useEffect, useState } from "react";
import useFetchTask from "../hooks/useFetchTasks";

const TaskForm = ({
    id,
    name = "NEW TASK",
    description,
    details,
    cancel
}) => {
    const [form, setForm ] = useState({ name, description, details })
    const {data, error, postTask, patchTask } = useFetchTask()

    useEffect(() => { setForm({ name, description, details })}, [id, name])
    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        id ? patchTask(id, form) : postTask(form) 
        cancel()
    }

    return (
        <>
            <h1> {name} </h1>
            <form style={{ display: "grid", gridGap: "1em"}} onSubmit={handleSubmit}>
                <label> { id && "New"} Title: </label>
                <input type="text" name="name" value={form.name} onChange={onChange}/>
                <label> Description: </label>
                <textarea name="description" value={form.description} onChange={onChange}/>
                <label> Details: </label>
                <textarea name="details" value={form.details} onChange={onChange}/>
                <div style={{ paddingTop: '1em', display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "1rem"}}>
                    <button onClick={cancel}> Cancel </button>
                    <button type="submit"> Save </button>
                </div>
            </form>
           
        </>
    )
}

export default TaskForm