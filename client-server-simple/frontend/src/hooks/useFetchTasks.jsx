import { useState } from "react"

const useFetchTask = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null);

    const postTask = async (args) => {
        const response = await fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(args)
        })
        const data = await response.json()
        setData(data)
    }

    const patchTask = async (args) => {
        const response = await fetch("http://localhost:8000/tasks", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(args)
        })
        const data = await response.json()
        setData(data)
    }

    return { data, error, postTask, patchTask}
}

export default useFetchTask