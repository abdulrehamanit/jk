import mongoose from "mongoose";
//db connection
export async function db(){
    try {
        await mongoose.connect("mongodb://127.0.0.1/TaskDB")
        console.log("db is connected");
    } catch (error) {
        console.log(error);
    }
}
