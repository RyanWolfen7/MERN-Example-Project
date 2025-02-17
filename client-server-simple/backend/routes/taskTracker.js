import express from 'express'
import db from '../config/database.js'
import { ObjectId } from 'mongodb'

const TASK_COLLECTION = 'task_tracker_simple'
const taskRouter = express.Router('/tasks')

taskRouter.use(express.json())

// custom middle ware specifit to the post call
const validateTaskRequest = (req, res, next) => {
    console.log("=== Validating POST ===")
    const { body, headers} = req
    if(
        !body ||
        headers.requestMethod != 'POST' ||
        typeof body != 'object' ||
        body == null
    ) res.status(400)
    const { name, description, details } = body
    if( !name || !description || !details ) res.send("missing required variables").status(400)
    next()
}

taskRouter.get('/', (req, res) => {
    console.log('Healthy')
    res.send("Healthy")
})

taskRouter.post('/', validateTaskRequest, async (req, res) => {
    try {
        const document = {
            ...req.body,
            date: new Date()
        }
        let collection = await db.collection(TASK_COLLECTION);
        let result = await collection.insertOne(document);
        res.send(result).status(201);
    } catch(error) {
        console.error(error);
        res.status(500).send("Error adding record");
    }
})

taskRouter.delete('/:id', async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id)}
        console.log(query)
        let collection = await db.collection(TASK_COLLECTION);
        let result = await collection.deleteOne(query);
        res.send(result).status(201);
    } catch(error) {
        console.error(error);
        res.status(500).send("Error deleting record");
    }
})


taskRouter.get('/list', async (req, res) => {
    // add timer , call back, change of state or make better frontend hook
    const collection = await db.collection(TASK_COLLECTION)
    const results = await collection.find().toArray()
    res.send(results).status(200)
})


export default taskRouter