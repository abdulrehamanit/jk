import Task from '../models/Task.js'

export const getTasks=async (req,res,next)=>{
    try {
        let tasks=await Task.find()
        res.json(tasks)
    } catch (error) {
        console.log(error);
    }
}

export const postTasks=async (req,res,next)=>{
    try {
        // console.log(req.body)
        let newTask=await Task.create({name:req.body.name})
        res.send(newTask)
    } catch (error) {
        console.log(error);
    }
    }

export const getTask=async (req,res,next)=>{
    try {
        // console.log(req.params.id);
        let task=await Task.findById(req.params.id)
        res.status(200).json({
            status:"success",
            data:task
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"could not fetch the task"
        })
    }
}

export const updateTask=async (req,res,next)=>{
    try {
        // console.log(req.params.id);
        let updatedTask=await Task.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
        res.status(201).json({
            status:"success",
            data:updatedTask
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"could not update the task"
        })
    }
}

export const deleteTask=async (req,res,next)=>{
    try {
        // console.log(req.params.id);
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"success"
        })
    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:"could not delete the task"
        })
    }
} 