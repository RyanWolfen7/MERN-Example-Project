import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { clientRouter } from './routes/index.js';
import taskRouter from './routes/taskTracker.js';

const PORT = process.env.PORT || 8000;
const app = express()

app.use(cors())
app.use(clientRouter)
app.use('/tasks', taskRouter)
app.listen(PORT, () => {
    console.log('We all live on port ' + PORT);
});