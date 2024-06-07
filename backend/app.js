import express from 'express';
import {db} from './config/db.js'
import cors from 'cors'
import taskRouter from './routes/taskRoutes.js';
db()

let app=express()

//incoming json data
app.use(cors())
app.use(express.json())


//http://localhost:5000/task
app.use("/task",taskRouter)

export default app;