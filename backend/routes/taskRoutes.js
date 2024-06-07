import express from 'express'
import { deleteTask, getTask, getTasks, postTasks, updateTask } from '../controllers/taskControllers.js'


let taskRouter=express.Router()

taskRouter.post("/",postTasks)

taskRouter.get("/",getTasks)

taskRouter.get("/:id",getTask)

taskRouter.put("/:id",updateTask)


taskRouter.delete("/:id",deleteTask)




export default taskRouter;