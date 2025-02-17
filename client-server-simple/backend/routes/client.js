import express from 'express'
import path from 'path'
const clientRouter = express.Router()

// example of in code middle ware that can be abstracted out to middleware folder
const simpleLogger = (req, res, next) => {
    console.log(`=== Requested ${req.originalUrl} HIT ===`)
    next()
}

// clientRouter.use(simpleLogger) // setting the middle ware to this route chain

// Main route that can serve your built react app
clientRouter.get('/', (req, res) => {
    res.send() // here you can either have an internal client build or pull from a CDN 
})

clientRouter.get('/test', simpleLogger, (req, res) => {
    res.sendFile(path.join( process.cwd() ,'./views/test.html'))
})

export default clientRouter