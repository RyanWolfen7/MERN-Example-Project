import { MongoClient } from "mongodb";

const MONGO_USER = process.env.MONGO_USER
const MONGO_KEY = process.env.MONGO_KEY
const MONGO_CLUSTER = process.env.MONGO_CLUSTER
const MONGO_APP = process.env.MONGO_APP
const url = `mongodb+srv://${MONGO_USER}:${MONGO_KEY}@${MONGO_CLUSTER}/?retryWrites=true&w=majority&appName=${MONGO_APP}`

const client = new MongoClient(url)

try {
    await client.connect()
    console.log(`MongoDB successfully connected @ Cluster: ${MONGO_CLUSTER} ; App: ${MONGO_APP}`)
} catch (error) {
    console.log(error)
} 

const db = client.db("Demo")

export default db