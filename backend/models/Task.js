import { Schema, model } from 'mongoose';

let taskSchema=new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    }
})

let Task=model("Task",taskSchema)

export default Task;